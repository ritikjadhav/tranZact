'use server'
import prisma from '@tranzact/db'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth'

export async function getBalance() {
    try {
        const session = await getServerSession(authOptions)
        if (!session?.user || !session.user?.id) {
            return { message: 'Unauthorized access' }
        }

        const balance = await prisma.balance.findFirst({
            where: {
                userId: session?.user.id,
            },
        })

        if (!balance) {
            return {
                message: 'Balance not found',
            }
        }

        return {
            data: balance,
        }
    } catch (e) {
        console.error('Error fetching balance:', e)
        return {
            message: 'Internal server error',
        }
    }
}
