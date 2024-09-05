'use client'
import { Card } from '@repo/ui/card'
import { useBalance } from '@tranzact/store/useBalance'
import { useEffect } from 'react'
import axios from 'axios'
import { useSetRecoilState } from 'recoil'
import { balanceAtom } from '../../../packages/store/src/atoms/balance'

export const BalanceCard = () => {
    const { amount, locked } = useBalance()
    const setBalance = useSetRecoilState(balanceAtom)

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await axios.get('/api/balance')                
                setBalance({
                    amount: response.data.balance.amount,
                    locked: response.data.balance.locked,
                })
            } catch (e) {
                console.error('Error fetching balance:', e)
            }
        }
        fetchBalance()    
    }, [])
    
    return (<Card title='Balance'>
        <div className='flex justify-between pb-1 mb-4 border-b dark:border-gray-700 text-gray-900 dark:text-white'>
            <div>Unlocked Balance</div>
            <div>{amount} INR</div>
        </div>
        <div className='flex justify-between pb-1 mb-4 border-b dark:border-gray-700 text-gray-900 dark:text-white'>
            <div>Total Locked Balance</div>
            <div>{locked} INR</div>
        </div>
        <div className='flex justify-between pb-1 mb-4 border-b dark:border-gray-700 text-gray-900 dark:text-white'>
            <div>Total Balance</div>
            <div>{amount + locked} INR</div>
        </div>
    </Card>)
}