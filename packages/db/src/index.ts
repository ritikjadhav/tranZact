import { Prisma, PrismaClient } from '@prisma/client'
import { OnRampStatus as PrismaOnRampStatus } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

export type PrismaTransactionClient = Prisma.TransactionClient

export type OnRampStatus = PrismaOnRampStatus

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma