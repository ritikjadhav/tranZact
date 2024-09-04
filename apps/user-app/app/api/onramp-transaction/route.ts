import prisma from '@tranzact/db'
import { getServerSession } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'
import { authOptions } from '../../../lib/auth'

export async function POST(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json(
                { message: 'Unauthorized access' },
                { status: 401 }
            )
        }
        
        const amount = await req.json()
        if (amount <= 0) {
            return NextResponse.json(
                { message: 'Invalid amount' },
                { status: 400 }
            )
        }
        
        const balance = await prisma.balance.update({
            where: {
                userId: session?.user.id,
            },
            data: {
                amount: {
                    increment: amount,
                },
            },
        })

        return NextResponse.json(
            { message: 'Money added to wallet successfully!', balance },
            { status: 200 }
        )
    } catch (e) {
        console.error('Error adding money to wallet:', e)
        return NextResponse.json(
            { message: 'Failed to add money to wallet', error: e },
            { status: 500 }
        )
    }
}
