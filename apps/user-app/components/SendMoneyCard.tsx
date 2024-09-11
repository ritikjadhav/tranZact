'use client'
import { Button } from '@repo/ui/button'
import { Card } from '@repo/ui/card'
import { TextInput } from '@repo/ui/TextInput'
import { useState } from 'react'
import { p2pTransfer } from '../lib/actions/p2pTransfer'

export const SendMoneyCard = () => {
    const [phone, setPhone] = useState<string>('')
    const [amount, setAmount] = useState<number>(0)

    return <Card title='Send Money'>
        <TextInput onChange={(value) => setPhone(value)} type='text' label='Phone' placeholder='8888347612' />
        <TextInput onChange={(value) => setAmount(value)} type='number' label='Amount' placeholder='1000' />
        <div className='flex justify-center mt-6'>
            <Button onClick={async () => {
                await p2pTransfer(phone, amount)
            }}>Send</Button>
        </div>
    </Card>
}