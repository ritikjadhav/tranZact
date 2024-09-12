'use server'

import { getServerSession } from 'next-auth'
import { authOptions } from '../auth'
import prisma from '@tranzact/db'
import { P2PTransaction, GetP2PTransaction, P2PTransResponse } from '../../types'

export const getP2PTransactions = async (): Promise<P2PTransResponse> => {
    try {
        const session = await getServerSession(authOptions)
        if (!session?.user || !session?.user.id) {
            return {
                status: 'error',
                message: 'Unauthorized access',
            }
        }
        const transactions = await prisma.p2PTransaction.findMany({
            where: {
                fromUserId: session.user.id,
            },
            orderBy: {
                timeStamp: 'desc',
            },
            take: 10,
        })

        const formattedTransactions = transactions.map((t: GetP2PTransaction): P2PTransaction => ({
            id: t.id,
            amount: t.amount,
            time: t.timeStamp,
            status: (t.fromUserId === session.user.id) ? 'sent' : 'received'
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
