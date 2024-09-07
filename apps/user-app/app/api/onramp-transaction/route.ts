import prisma from '@tranzact/db'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../lib/auth'
import { TransactionStatus } from '../../../types'

export async function GET() {
    try {
        const session = await getServerSession(authOptions)
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
        console.log(e);        
    }
}
