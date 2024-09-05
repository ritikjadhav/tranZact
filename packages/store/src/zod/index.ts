import { z } from 'zod'

export const AmountSchema = z.number().positive({ message: 'Invalid amount' })