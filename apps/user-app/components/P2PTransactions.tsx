'use client'
import { Card } from '@repo/ui/card'
import { useEffect, useState } from 'react'
import { getP2PTransactions } from '../lib/actions/getP2PTransactions'
import { P2PTransaction } from '../types'

export const P2PTransactions = () => {
    const [p2pTransactions, setP2PTransactions] = useState<P2PTransaction[]>([])
    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await getP2PTransactions()
                if (response.status === 'success') {
                    setP2PTransactions(response.data)
                }
            } catch (e) {
                console.error('Error fetching transactions:', e)
            }
        }
        fetchTransactions()
    })

    return (
        <Card title='Recent Transactions'>
            <div>
                {p2pTransactions.map((transaction) => (
                    <div className='flex justify-between py-1' key={transaction.id}>
                        <div>
                            <div className='text-gray-900 dark:text-white'>{(transaction.status === 'sent') ? 'Sent INR' : 'Received INR'}</div>
                            <div className='text-xs text-slate-600 dark:text-gray-400'>{transaction.time.toDateString()}</div>
                        </div>
                        <div className='flex flex-col justify-center text-gray-900 dark:text-white'>Rs {transaction.amount}</div>
                    </div>
                ))}
            </div>
        </Card>
    )
}