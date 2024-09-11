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

export type TransactionResponse = {
    status: 'success'
    data: Transaction[]
} | {
    status: 'error',
    message: string
    error?: unknown
}

export type P2PTransaction = {
    id: string,
    amount: number,
    time: Date,
    status: string
}

export type P2PTransResponse = {
    status: 'success'
    data: P2PTransaction[]
} | {
    status: 'error',
    message: string
    error?: unknown
}