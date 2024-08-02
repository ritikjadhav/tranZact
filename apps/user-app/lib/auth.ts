import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
import prisma from '@tranzact/db'
import { JWT } from 'next-auth/jwt'
import { Session } from 'next-auth'

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                phone: { label: 'Phone number', type: 'text', placeholder: '8888345678'},
                password: { label: 'Password', type: 'password', placeholder: ''}
            },
            async authorize(credentials: any) {
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
                            password: hashedPassword,
                            auth_type: 'Credentials'
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
        })
    ],
    callbacks: {
        async session({ token, session }: any) {
            if (session && session.user) {
                session.user.id = token.sub
            }

            return session
        }
    }
}