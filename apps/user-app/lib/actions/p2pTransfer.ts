'use server'

import { getServerSession } from 'next-auth'
import { authOptions } from '../auth'
import prisma from '@tranzact/db'

export async function p2pTransfer(to: string, amount: number) {
    try {
        const session = await getServerSession(authOptions)
        const from = session?.user.id
        if (!from) {
            return {
                message: 'Unauthorized access',
            }
        }
        const toUser = await prisma.user.findUnique({
            where: {
                phone: to,
            },
        })

        if (!toUser) {
            return {
                message: 'User not found',
            }
        }

        await prisma.$transaction(async (tx) => {
            await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${from} FOR UPDATE`
            const fromBalance = await tx.balance.findUnique({
                where: { userId: from },
            })
            if (!fromBalance || fromBalance.amount < amount) {
                throw new Error('Insufficient balance')
            }
            await tx.balance.update({
                where: {
                    userId: from,
                },
                data: {
                    amount: {
                        decrement: amount,
                    },
                },
            })
            await tx.balance.update({
                where: {
                    userId: toUser.id,
                },
                data: {
                    amount: {
                        increment: amount,
                    },
                },
            })
            await tx.p2PTransaction.create({
                data: {
                    amount: amount,
                    timeStamp: new Date(),
                    fromUserId: from,
                    toUserId: toUser.id
                }
            })
        })

        return {
            message: 'Transaction successful!',
        }
    } catch (e) {
        return {
            message: 'An error occurred while creating the transaction',
            error: e,
        }
    }
}
