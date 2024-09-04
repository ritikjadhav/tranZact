import { OnRampTransaction } from '../../../components/OnRampTransaction'
import { AddMoneyCard } from '../../../components/AddMoneyCard'
import { TransactionStatus } from '../../../types'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../lib/auth'
import prisma from '@tranzact/db'
import { BalanceCard } from '../../../components/BalanceCard'

async function getBalance() {
    const session = await getServerSession(authOptions)
    const balance = await prisma.balance.findFirst({
        where: {
            userId: session?.user.id
        }
    })

    return {
        amount: balance?.amount,
        locked: balance?.locked
    }
}

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
    const balance = await getBalance()
    const transactions = await getOnRampTransactions()

    return <div>
        <div className='text-3xl font-medium py-6 dark:text-white'>Transfer</div>
        <div className='flex'>
            <div className='w-96 mr-4'>
                <AddMoneyCard />
            </div>
            <div className='w-96'>
                <BalanceCard amount={balance.amount ?? 0} locked={balance.locked ?? 0} />
                <div className='mt-4'>
                    <OnRampTransaction transactions={transactions} />
                </div>
            </div>
        </div>
    </div>
}
