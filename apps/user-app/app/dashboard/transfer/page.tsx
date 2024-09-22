import { OnRampTransaction } from '../../../components/OnRampTransaction'
import { AddMoneyCard } from '../../../components/AddMoneyCard'
import { BalanceCard } from '../../../components/BalanceCard'

export default async function Transfer() {
    return (
        <div className='pb-6'>
            <div className='text-3xl font-poppins font-semibold py-6 bg-gradient-to-r from-[#1d4ed8] via-[#3b82f6] to-[#60a5fa] text-transparent bg-clip-text'>Transfer</div>
            <div className='flex'>
                <div className='w-1/2 pr-4'>
                    <AddMoneyCard />
                    <div className='mt-8'>
                        <OnRampTransaction />
                    </div>
                </div>
                <div className='w-1/2 pl-4'>
                    <BalanceCard />                    
                </div>
            </div>
        </div>
    )
}
