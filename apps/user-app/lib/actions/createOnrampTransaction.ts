'use server'

import prisma from '@tranzact/db'
import { createOnrampSchema } from '@tranzact/store/zod'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth'

export const createOnrampTransaction = async (provider: string, amount: number) => {
    try {
        const session = await getServerSession(authOptions)
        if (!session?.user || !session.user?.id) {
            return {
                message: 'Unauthorized access'
            }
        }

        const token = Math.random().toString(16).substring(7)
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
        return { message: 'Transaction in progress!'}
    } catch (e) {
        return {
            message: 'An error occurred while creating the transaction',
            error: e
        }
    }
}