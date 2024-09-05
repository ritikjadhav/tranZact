'use client'
import { Button } from '@repo/ui/button'
import { Card } from '@repo/ui/card'
import { Select } from '@repo/ui/Select'
import { TextInput } from '@repo/ui/TextInput'
import axios from 'axios'
import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { balanceAtom } from '../../../packages/store/src/atoms/balance'

const SUPPORTED_BANKS = [
    {
        name: 'HDFC Bank',
        redirectUrl: 'https://netbanking.hdfcbank.com',
    },
    {
        name: 'Axis Bank',
        redirectUrl: 'https://www.axisbank.com/',
    },
    {
        name: 'ICICI Bank',
        redirectUrl: 'https://www.icicibank.com/',
    },
]

export const AddMoneyCard = () => {
    const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl)
    const [amount, setAmount] = useState(0)
    const setBalance = useSetRecoilState(balanceAtom)

    const onAddMoney = async () => {
        try {
            const response = await axios.post('/api/balance', amount)
            if (response.status === 200) {
                const balance = response.data.balance
                setBalance({
                    amount: balance.amount,
                    locked: balance.locked
                })
            }
            console.log(response)
        } catch (e) {
            console.log('Error adding money:', e)      
        }
    }

    return (
        <Card title='Add Money'>
            <TextInput
                onChange={(value) => setAmount(value)}
                type='number'
                label='Amount'
                placeholder='Amount'
            />
            <div className='text-sm font-medium mt-4 mb-2 dark:text-white'>
                Select Your Bank
            </div>
            <Select
                onSelect={(value) => {
                    setRedirectUrl(
                        SUPPORTED_BANKS.find((x) => x.name === value)
                            ?.redirectUrl ?? ''
                    )
                }}
                options={SUPPORTED_BANKS.map((option) => ({
                    key: option.name,
                    value: option.name,
                }))}
            />
            <div className='mt-6'>
                <Button onClick={onAddMoney}>Add Money</Button>
            </div>
        </Card>
    )
}