import { OnRampTransaction } from '../../../components/OnRampTransaction'
import { AddMoneyCard } from '../../../components/AddMoneyCard'
import { BalanceCard } from '../../../components/BalanceCard'

export default async function Transfer() {
    return (
        <div className='pb-8'>
            <div className='text-3xl font-poppins font-semibold pb-6 md:py-6 bg-gradient-to-r from-[#1d4ed8] via-[#3b82f6] to-[#60a5fa] text-transparent bg-clip-text'>Transfer</div>
            <div className='grid xl:grid-cols-2 gap-8'>
                <div>
                    <AddMoneyCard />
                    <div className='mt-8'>
                        <OnRampTransaction />
                    </div>
                </div>
                <div className=''>
                    <BalanceCard />                    
                </div>
            </div>
        </div>
    )
}
