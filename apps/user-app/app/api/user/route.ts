import prisma from '@tranzact/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export const GET = async () => {
    await prisma.user.create({
        data: {
            email: 'ritik@gmail.com',
            name: 'Ritik'
        }
    })
    return NextResponse.json({ message: 'Hi there!'})
}