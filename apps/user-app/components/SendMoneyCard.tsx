'use client'
import { Button } from '@repo/ui/button';
import { Card } from '@repo/ui/card';
import { TextInput } from '@repo/ui/TextInput';
import axios from 'axios';
import { useState } from 'react';

export const SendMoneyCard = () => {
    const [phone, setPhone] = useState<string>()
    const [amount, setAmount] = useState<number>()

    const onSendMoney = async () => {
        try {
            const response = await axios.post('/api/sendmoney', { phone, amount: Number(amount) })
            console.log('Money sent successfully:', response.data)            
        } catch (e) {
            console.error('Error sending money:', e)
        }
    }

    return <Card title='Send Money'>
        <TextInput onChange={(value) => setPhone(value)} type='text' label='Phone' placeholder='8888347612' />
        <TextInput onChange={(value) => setAmount(value)} type='number' label='Amount' placeholder='1000' />
        <div className='flex justify-center mt-6'>
            <Button onClick={onSendMoney}>Send</Button>
        </div>
    </Card>
}