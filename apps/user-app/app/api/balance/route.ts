import prisma from '@tranzact/db'
import { getServerSession } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'
import { authOptions } from '../../../lib/auth'
import { AmountSchema } from '@tranzact/store/zod'

const validateSession = async () => {
    const session = await getServerSession(authOptions)
    if (!session) {
        return NextResponse.json(
            { message: 'Unauthorized access' },
            { status: 401 }
        )
    }
    return session
}

export async function GET() {
    try {
        const session = await validateSession()
        if (session instanceof NextResponse) return session

        const balance = await prisma.balance.findFirst({
            where: {
                userId: session?.user.id
            }
        })

        if (!balance) {
            return NextResponse.json(
                { message: 'Balance not found' },
                { status: 404 }
            )
        }

        return NextResponse.json(
            { message: 'Your balance is:', balance },
            { status: 200 }
        )
    } catch (e) {
        console.error('Error fetching balance:', e);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        )
    }
}

export async function POST(req: NextRequest) {
    try {
        const session = await validateSession()
        if (session instanceof NextResponse) return session
        
        const body = await req.json()
        const result = AmountSchema.safeParse(body)

        if(!result.success) {
            return NextResponse.json(
                { message: 'Invalid amount', errors: result.error.errors },
                { status: 400 }
            )
        }

        const amount = result.data
        
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
