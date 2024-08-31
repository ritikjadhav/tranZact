import { Session } from 'next-auth'
import { z } from 'zod'
import { UserInput } from '../zod/user'

export type SessionWithUserId = Session & {
    user: {
        id: string
    }
}

export type UserInputType = z.infer<typeof UserInput>

export type CredentialsType = {
    phone: string
    password: string
}

export type Transaction = {
    id: string,
    time: Date,
    amount: number,
    status: TransactionStatus,
    provider: string
}

export enum TransactionStatus {
    PROCESSING = 'Processing',
    SUCCESS = 'Success',
    FAILURE = 'Failure',
}