import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import prisma from '@tranzact/db'
import { authOptions } from '../../../lib/auth'

async function sendMoney({ amount, phone }: { amount: number; phone: string }) {
    try {
        const session = await getServerSession(authOptions)
        await prisma.$transaction([
            prisma.user.update({
                where: {
                    phone: phone,
                },
                data: {
                    Balance: {
                        update: {
                            amount: {
                                increment: amount,
                            },
                        },
                    },
                },
            }),
            prisma.user.update({
                where: {
                    id: session?.user.id,
                },
                data: {
                    Balance: {
                        update: {
                            amount: {
                                increment: -amount,
                            },
                        },
                    },
                },
            }),
        ])
        return NextResponse.json(
            { message: 'Transaction successful!' },
            { status: 200 }
        )
    } catch (e) {
        console.log(e);        
    }
}

export async function POST(req: NextRequest) {
    if (req.method === 'POST') {
        const { amount, phone } = await req.json()
        try {
            await sendMoney({ amount, phone })
            return NextResponse.json(
                { message: 'Money sent successfully' },
                { status: 200 }
            )
        } catch (e) {
            return NextResponse.json(
                { message: 'Failed to send money' },
                { status: 500 }
            )
        }
    } else {
        return NextResponse.json(
            { error: 'Method not allowed' },
            { status: 405 }
        )
    }
}
