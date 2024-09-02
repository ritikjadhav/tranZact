import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import prisma from '@tranzact/db';
import { authOptions } from '../../../lib/auth';

async function sendMoney({ amount, phone }: { amount: number, phone: string }) {
    const session = await getServerSession(authOptions)
    await prisma.$transaction([
        prisma.balance.update({
            where: {
                userId: session?.user.id
            },
            data: {
                amount: {
                    increment: amount
                }
            }
        }),
        prisma.user.update({
            where: {
                phone: phone
            },
            data: {
                Balance: {
                    update: {
                        amount: {
                            increment: -amount
                        }
                    }                   
                }
            }
        })
    ])
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.method, 'method type');
    
    if (req.method === 'POST') {
        const { amount, phone } = req.body
        try {
            await sendMoney({ amount, phone })
            res.status(200).json({
                message: 'Money sent successfully'
            })
        } catch (e) {
            res.status(500).json({ error: 'Failed to send money' })
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' })
    }
}
