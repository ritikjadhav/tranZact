'use client'
import { Card } from '@repo/ui/card'
import { Transaction } from '../types'
import { useEffect, useState } from 'react'
import { getOnRampTransactions } from '../app/dashboard/transfer/page'
import { useBalance } from '@tranzact/store/useBalance'
import axios from 'axios'

export const OnRampTransaction = ({ transactions }: { transactions: Transaction[] }) => {
    const { amount } = useBalance()
    const [onrampTrans, setOnrampTrans] = useState(transactions)

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await axios.get('/api/onramp-transaction')                
                setOnrampTrans(response.data)
            } catch (e) {
                console.error('Error fetching balance:', e)
            }
        }
        fetchBalance()    
    }, [amount])

    if (!onrampTrans.length) {
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
                {onrampTrans.map((transaction) => (
                    <div className='flex justify-between py-1' key={transaction.id}>
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