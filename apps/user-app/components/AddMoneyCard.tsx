'use client'
import { Card } from '@repo/ui/card'
import { Select } from '@repo/ui/Select'
import { TextInput } from '@repo/ui/TextInput'
import React, { useState } from 'react'

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

    return (
        <Card title='Add Money'>
            <TextInput
                onChange={() => {}}
                label='Amount'
                placeholder='Amount'
            />
            <div className='text-sm font-medium mt-4 mb-2'>
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
            <button
                onClick={() => {
                    window.location.href = redirectUrl ?? ''
                }}
                className='w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'
            >
                <span className='w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                    Add Money
                </span>
            </button>
        </Card>
    )
}