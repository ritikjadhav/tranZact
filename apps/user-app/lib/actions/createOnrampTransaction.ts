'use server'

import prisma from '@tranzact/db'
import { createOnrampSchema } from '@tranzact/store/zod'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth'
import crypto from 'crypto'
import axios from 'axios'


export const createOnrampTransaction = async (provider: string, amount: number) => {
    try {
        const session = await getServerSession(authOptions)
        if (!session?.user || !session.user?.id) {
            return {
                message: 'Unauthorized access'
            }
        }

        const token = crypto.randomBytes(16).toString('hex')
        const result = createOnrampSchema.safeParse({ provider, amount })

        if (!result.success) {
            return {
                message: 'Invalid input',
                errors: result.error.errors
            }
        }
        
        await prisma.onRampTransaction.create({
            data: {
                userId: session.user.id,
                status: 'Processing',
                token: token,
                provider: provider,
                amount: amount,
                startTime: new Date()
            }
        })
        
        try {            
            await axios.post('https://tranzact-bank-web-hook.vercel.app/bankWebhook', { token: token })
            return { message: 'Transaction successful!'}
        } catch (error) {
            console.log(error);            
        }
        return { message: 'Transaction in progress!'}
    } catch (e) {
        return {
            message: 'An error occurred while creating the transaction',
            error: e
        }
    }
}