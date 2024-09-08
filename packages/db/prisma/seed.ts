import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const ritik = await prisma.user.upsert({
        where: { phone: '9999999999' },
        update: {},
        create: {
            phone: '9999999999',
            password: 'ritik',
            name: 'ritik',
            auth_type: 'Credentials',
            OnRampTransaction: {
                create: {
                    startTime: new Date(),
                    status: 'Success',
                    amount: 60000,
                    token: '122',
                    provider: 'HDFC Bank'
                }
            },
            Balance: {
                create: {
                    amount: 1000,
                    locked: 500
                }
            }
        }
    })
    const viraj = await prisma.user.upsert({
        where: { phone: '9999999998' },
        update: {},
        create: {
            phone: '9999999998',
            password: 'viraj',
            name: 'viraj',
            auth_type: 'Credentials',
            OnRampTransaction: {
                create: {
                    startTime: new Date(),
                    status: 'Failure',
                    amount: 20000,
                    token: '123',
                    provider: 'HDFC Bank'
                }
            },
            Balance: {
                create: {
                    amount: 2000,
                    locked: 500
                }
            }
        }
    })
    const ankit = await prisma.user.upsert({
        where: { phone: '9999999997' },
        update: {},
        create: {
            phone: '9999999997',
            password: 'ankit',
            name: 'ankit',
            auth_type: 'Credentials',
            OnRampTransaction: {
                create: {
                    startTime: new Date(),
                    status: 'Success',
                    amount: 20000,
                    token: '124',
                    provider: 'HDFC Bank'
                }
            },
            Balance: {
                create: {
                    amount: 2000,
                    locked: 500
                }
            }
        }
    })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })