import { Session } from 'next-auth'
import { z } from 'zod'
import { UserInput } from '../zod/user'
import { OnRampStatus } from '@tranzact/db'

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

export type OnRampTransactionT = {
    id: string
    status: OnRampStatus
    token?: string
    provider: string
    amount: number
    startTime: Date
    userId?: string
}

export type TransactionResponse =
    | {
          status: 'success'
          data: OnRampTransactionT[]
      }
    | {
          status: 'error'
          message: string
          error?: unknown
      }

export type P2PTransaction = {
    id: string
    amount: number
    time: Date
    status: string
}

export type GetP2PTransaction = {
    id: string
    amount: number
    timeStamp: Date
    fromUserId: string
    toUserId: string
}

export type P2PTransResponse =
    | {
          status: 'success'
          data: P2PTransaction[]
      }
    | {
          status: 'error'
          message: string
          error?: unknown
      }
