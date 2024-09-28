'use client'

import { Card } from '@repo/ui/card'
import { ActionButton } from '@repo/ui/ActionButton'
import { IconCurrencyRupee } from "@tabler/icons-react"
import { useEffect, useState } from 'react'
import { getBalance } from '@/lib/actions/getBalance'
import { Balance } from '@tranzact/store/types'

export const TotalBalanceCard = () => {
    const [balance, setBalance] = useState<Balance>({ amount: 0, locked: 0})

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await getBalance()
                if (response.data) {
                    setBalance({
                        amount: response.data.amount,
                        locked: response.data.locked,
                    })
                }
            } catch (e) {
                console.error('Error fetching balance:', e)
            }
        }
        fetchBalance()    
    }, [])

    return (
        <Card title='totalBalance' >
            <div className='flex justify-between'>
                <div className='font-poppins dark:text-white'>
                    <div className='text-xl mb-3'>Total Balance</div>
                    <div className='flex text-5xl'>
                        <IconCurrencyRupee size={46} className='pt-1' />
                        {balance.amount + balance.locked}
                    </div>
                </div>
                <div className='flex'>
                    <div className='flex flex-col justify-center'>
                        <ActionButton label='Add' route='/dashboard/transfer' />
                    </div>
                    <div className='flex flex-col justify-center ml-4'>
                        <ActionButton label='Send' route='/dashboard/p2ptransfer' />
                    </div>
                </div>
            </div>
        </Card>
    )
}