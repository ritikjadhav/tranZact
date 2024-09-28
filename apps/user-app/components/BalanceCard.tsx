'use client'

import { Card } from '@repo/ui/card'
import { useEffect, useState } from 'react'
import { getBalance } from '../lib/actions/getBalance'
import { Balance } from '@tranzact/store/types'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { updateOnramp } from '@tranzact/store/updateOnramp'
import { balanceAtom } from '../../../packages/store/src/atoms/balance'
import { PieDonutChart } from './PieDonutChart'

export const BalanceCard = () => {
    const [balance, setBalance] = useState<Balance>({ amount: 0, locked: 0})
    const updateTrans = useRecoilValue(updateOnramp)
    const setTotalBalance = useSetRecoilState(balanceAtom)

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await getBalance()
                if (response.data) {
                    setBalance({
                        amount: response.data.amount,
                        locked: response.data.locked,
                    })
                    setTotalBalance({
                        amount: response.data.amount,
                        locked: response.data.locked
                    })
                }
            } catch (e) {
                console.error('Error fetching balance:', e)
            }
        }
        fetchBalance()    
    }, [updateTrans])

    if (balance.amount + balance.locked === 0) {
        return <Card title='Balance'>
            <div className='flex justify-center'>
                <img src="/wallet.png" alt="wallet icon" width={'400px'} />
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg text-center font-poppins">You have no balance</p>
        </Card>
    }
    
    return (<Card title='balanceCard'>
        <h1 className="text-xl font-semibold font-poppins text-gray-900 dark:text-white">Balance</h1>
        <PieDonutChart />
        <div className='flex justify-between pb-1 mb-4 border-b font-poppins dark:border-gray-700 text-gray-900 dark:text-white'>
            <div>Unlocked Balance</div>
            <div className='flex items-center'>
                {balance.amount}
                <img width='25' className='ml-2' src="https://img.icons8.com/papercut/60/rupee.png" alt="rupee"/>
            </div>
        </div>
        <div className='flex justify-between pb-1 mb-4 border-b font-poppins dark:border-gray-700 text-gray-900 dark:text-white'>
            <div>Total Locked Balance</div>
            <div className='flex items-center'>
                {balance.locked}
                <img width='25' className='ml-2' src="https://img.icons8.com/papercut/60/rupee.png" alt="rupee"/>
            </div>
        </div>
        <div className='flex justify-between pb-1 mb-4 border-b font-poppins dark:border-gray-700 text-gray-900 dark:text-white'>
            <div>Total Balance</div>
            <div className='flex items-center'>
                {balance.amount + balance.locked}
                <img width='25' className='ml-2' src="https://img.icons8.com/papercut/60/rupee.png" alt="rupee"/>
            </div>
        </div>
    </Card>)
}