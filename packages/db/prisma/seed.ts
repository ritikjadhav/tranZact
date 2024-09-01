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
            }
        }
    })
    console.log({ ritik, viraj })
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