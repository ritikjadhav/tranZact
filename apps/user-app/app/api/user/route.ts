import prisma from '@tranzact/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export const GET = async () => {
    // await prisma.user.create({
    //     data: {
    //         phone: '8888727412',
    //         password: 'ritik',
    //         auth_type: 'Credentials'
    //     }
    // })
    return NextResponse.json({ message: 'Hi there from user api!'})
}