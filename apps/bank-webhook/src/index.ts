import prisma from '@tranzact/db'
import { PaymentInfo } from '@tranzact/store/types'
import express from 'express'

const app = express()

app.post('/hdfcWebhook', async (req, res) => {
    const paymentInfo: PaymentInfo = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    }

    try {
        await prisma.$transaction([
            prisma.balance.update({
                where: {
                    userId: paymentInfo.userId
                },
                data: {
                    amount: {
                        increment: paymentInfo.amount
                    }
                }
            }),
            prisma.onRampTransaction.updateMany({
                where: {
                    token: paymentInfo.token
                },
                data: {
                    status: 'Success'
                }
            })
        ])

        res.status(200).json({
            messsage: 'Captured'
        })
    } catch (e) {
        console.log(e);
        res.status(411).json({
            messsage: 'Error while processing webhook'
        })
    }
})

app.listen(3004)