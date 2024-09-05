import { OnRampTransaction } from '../../../components/OnRampTransaction'
import { AddMoneyCard } from '../../../components/AddMoneyCard'
import { TransactionStatus } from '../../../types'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../lib/auth'
import { BalanceCard } from '../../../components/BalanceCard'
import prisma from '@tranzact/db'

async function getOnRampTransactions() {
    const session = await getServerSession(authOptions)
    const transactions = await prisma.onRampTransaction.findMany({
        where: {
            userId: session?.user.id
        }
    })

    return transactions.map(t => ({
        id: t.id,
        amount: t.amount,
        time: t.startTime,
        provider: t.provider,
        status: t.status as TransactionStatus
    }))
}

export default async function Transfer() {
    const transactions = await getOnRampTransactions()

    return (
        <div>
            <div className='text-3xl font-medium py-6 dark:text-white'>Transfer</div>
            <div className='flex'>
                <div className='w-96 mr-4'>
                    <AddMoneyCard />
                </div>
                <div className='w-96'>
                    <BalanceCard />
                    <div className='mt-4'>
                        <OnRampTransaction transactions={transactions} />
                    </div>
                </div>
            </div>
        </div>
    )
}
