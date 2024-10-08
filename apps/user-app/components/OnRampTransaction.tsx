'use client'
import { Card } from '@repo/ui/card'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { updateOnramp } from '@tranzact/store/updateOnramp'
import { getOnrampTransactions } from '../lib/actions/getOnrampTransaction'
import { OnRampTransactionT } from '../types'

export const OnRampTransaction = () => {
    const [onrampTrans, setOnrampTrans] = useState<OnRampTransactionT[]>()
    const [updateTrans, setUpdateTrans] = useRecoilState(updateOnramp)

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await getOnrampTransactions()
                if (response.status === 'success') {
                    setOnrampTrans(response.data)
                }
                setUpdateTrans(false)
            } catch (e) {
                console.error('Error fetching transactions:', e)
            }
        }
        fetchBalance()
    }, [updateTrans])

    if (!onrampTrans?.length) {
        return (
            <Card title='Recent Transactions'>
                <div className='flex justify-center'>
                    <img src="/documents.png" alt="documents icon" width={'350px'} />
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg text-center font-poppins">No recent transactions</p>
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
                            <div className='text-xs text-slate-600 dark:text-gray-400'>{transaction.startTime.toDateString()}</div>
                        </div>
                        <div className='flex flex-col justify-center text-gray-900 dark:text-white'>Rs {transaction.amount}</div>
                    </div>
                ))}
            </div>
        </Card>
    )
}