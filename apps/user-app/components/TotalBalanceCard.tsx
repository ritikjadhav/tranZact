'use client'

import { Card } from '@repo/ui/card'
import { useBalance } from '@tranzact/store/useBalance'
import { ActionButton } from '@repo/ui/ActionButton'
import { IconCurrencyRupee } from "@tabler/icons-react"

export const TotalBalanceCard = () => {
    const totalBalance = useBalance()

    return (
        <Card>
            <div className='flex justify-between'>
                <div className='font-poppins dark:text-white'>
                    <div className='text-xl mb-3'>Total Balance</div>
                    <div className='flex text-5xl'>
                        <IconCurrencyRupee size={46} className='pt-1' />
                        {totalBalance}
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