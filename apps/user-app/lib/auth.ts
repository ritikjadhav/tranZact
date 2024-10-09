import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from "next-auth/providers/google"
import bcrypt from 'bcrypt'
import prisma from '@tranzact/db'
import { JWT } from 'next-auth/jwt'
import { Session } from 'next-auth'
import { SessionWithUserId } from '../types'
import { CredentialsType } from '../types/index'

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                phone: { label: 'Phone number', type: 'text', placeholder: '8888345678'},
                password: { label: 'Password', type: 'password', placeholder: ''}
            },
            async authorize(credentials: CredentialsType | undefined) {
                if (!credentials?.phone || !credentials?.password) {
                    return null
                }
                const hashedPassword = await bcrypt.hash(credentials?.password, 10)
                const existingUser = await prisma.user.findFirst({
                    where:{
                        phone: credentials.phone,
                    }
                })
                if (existingUser) {
                    const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password)
                    if (passwordValidation) {
                        return {
                            id: existingUser.id,
                            name: existingUser.name,
                            email: existingUser.email
                        }
                    }
                    return null
                }

                try {
                    const user = await prisma.user.create({
                        data: {
                            phone: credentials.phone,
                            name: credentials.name,
                            email: credentials.email,
                            password: hashedPassword,
                            auth_type: 'Credentials',
                            Balance: {
                                create: {
                                    amount: 0,
                                    locked: 0
                                }
                            }
                        }
                    })

                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email
                    }
                } catch (e) {
                    console.error(e)
                }

                return null
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
        })        
    ],
    pages: {
        SignUp: '/signup',
        signIn: '/signin',
    },
    callbacks: {
        async session({ token, session }: { token: JWT, session: Session }): Promise<SessionWithUserId> {
            const sessionWithUserId = session as SessionWithUserId
            sessionWithUserId.user.id = token.sub ?? ''

            return sessionWithUserId
        }
    }
}