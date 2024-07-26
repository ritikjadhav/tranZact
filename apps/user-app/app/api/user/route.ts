import { PrismaClient } from '@tranzact/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

// const client = new PrismaClient()

export const GET = async () => {
    // await client.user.create({
    //     data: {
    //         email: 'ritik@gmail.com',
    //         name: 'Ritik'
    //     }
    // })
    return NextResponse.json({ message: 'Hi there!'})
}