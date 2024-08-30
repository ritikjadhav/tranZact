import { AddMoney } from '@repo/ui/AddMoney'
import { Balance } from '@repo/ui/Balance'
import { OnRampTransaction } from '../../../components/OnRampTransaction'
import { Transactions, TransactionStatus } from '../../../types'

export default function Transfer() {
    const transactions: Transactions[] = [
        {
            time: new Date(),
            amount: 100,
            status: TransactionStatus.PENDING,
            provider: 'Stripe'
        },
        {
            time: new Date(),
            amount: 200,
            status: TransactionStatus.SUCCESS,
            provider: 'Paypal'
        },
        {
            time: new Date(),
            amount: 300,
            status: TransactionStatus.FAILED,
            provider: 'Stripe'
        }
    ]
    return <div className='flex'>
        <div className='w-96 mr-4'>
            <AddMoney />
        </div>
        <div className='w-96'>
            <Balance amount={0} locked={0} />
            <div className='mt-4'>
                <OnRampTransaction transactions={transactions} />
            </div>
        </div>
    </div>
}
