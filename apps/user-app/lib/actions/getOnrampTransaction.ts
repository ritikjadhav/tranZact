import { getServerSession } from 'next-auth'
import { authOptions } from '../auth'
import prisma from '@tranzact/db'
import { TransactionStatus } from '../../types'

export const getOnrampTransactions = async () => {
    try {
        const session = await getServerSession(authOptions)
        if (!session?.user || !session.user?.id) {
            return {
                message: 'Unauthorized access'
            }
        }

        const transactions = await prisma.onRampTransaction.findMany({
            where: {
                userId: session?.user.id,
            },
            orderBy: {
                startTime: 'desc'
            },
            take: 3
        })

        return transactions.map((t) => ({
            id: t.id,
            amount: t.amount,
            time: t.startTime,
            provider: t.provider,
            status: t.status as TransactionStatus,
        }))
    } catch (e) {
        return {
            message: 'An error occurred while fetching the transactions',
            error: e
        }
    }
}