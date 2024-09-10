'use server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth'
import prisma from '@tranzact/db'
import { TransactionResponse, TransactionStatus } from '../../types'

export const getOnrampTransactions = async (): Promise<TransactionResponse> => {
    try {
        const session = await getServerSession(authOptions)
        if (!session?.user || !session.user?.id) {
            return {
                status: 'error',
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

        const formattedTransactions = transactions.map((t) => ({
            id: t.id,
            amount: t.amount,
            time: t.startTime,
            provider: t.provider,
            status: t.status as TransactionStatus,
        }))

        return {
            status: 'success',
            data: formattedTransactions
        }
    } catch (e) {
        return {
            status: 'error',
            message: 'An error occurred while fetching the transactions',
            error: e
        }
    }
}