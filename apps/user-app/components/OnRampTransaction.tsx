import { Card } from '@repo/ui/card'
import { Transactions } from '../types'

export const OnRampTransaction = ({ transactions }: { transactions: Transactions[] }) => {
    if (!transactions.length) {
        return (
            <Card title='Recent Transactions'>
                <div className='text-center p-6'>
                    No recent transactions
                </div>
            </Card>
        )
    }
    return (
        <Card title='Recent Transactions'>
            <div>
                {transactions.map(transaction => (
                    <div className='flex justify-between py-1'>
                        <div>
                            <div className='text-gray-900 dark:text-white'>Received INR</div>
                            <div className='text-xs text-slate-600 dark:text-gray-400'>{transaction.time.toDateString()}</div>
                        </div>
                        <div className='flex flex-col justify-center text-gray-900 dark:text-white'>Rs {transaction.amount}</div>
                    </div>
                ))}
            </div>
        </Card>
    )
}