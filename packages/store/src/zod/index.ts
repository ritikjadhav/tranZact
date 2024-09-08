import { z } from 'zod'

export const AmountSchema = z.number().positive({ message: 'Invalid amount' })

export const createOnrampSchema = z.object({
    amount: z.number().positive({ message: 'Amount must be greater than zero'}),
    provider: z.string().min(1, { message: 'Provider is required' })
})

export const paymentToken = z.object({
    token: z.string({ message: 'Transaction token required'})
})