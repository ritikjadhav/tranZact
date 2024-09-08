import prisma from '@tranzact/db'
import { paymentToken } from '@tranzact/store/zod'
import express from 'express'

const app = express()

app.use(express.json())

app.post('/hdfcWebhook', async (req, res) => {
    try {
        const result = paymentToken.safeParse(req.body)
        if (!result.success) {
            return res.status(400).json({
                message: result.error?.errors
            })
        }
        const token = result.data.token

        const transaction = await prisma.onRampTransaction.findUnique({
            where: {
                token: token,
            },
        })

        if (!transaction) {
            return res.json({ message: 'Transaction not found'})
        }

        await prisma.$transaction([
            prisma.onRampTransaction.update({
                where: {
                    token: token,
                },
                data: {
                    status: 'Success',
                },
            }),
            prisma.balance.update({
                where: {
                    userId: transaction?.userId,
                },
                data: {
                    amount: {
                        increment: transaction?.amount,
                    },
                },
            }),
        ])

        res.status(200).json({
            messsage: 'Captured',
        })
    } catch (e) {
        console.log(e)
        res.status(411).json({
            messsage: 'Error while processing webhook',
        })
    }
})

app.listen(3004, () => {
    console.log('bank-webhook running on port 3004')
})
