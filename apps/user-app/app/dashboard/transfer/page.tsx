import { OnRampTransaction } from '../../../components/OnRampTransaction'
import { AddMoneyCard } from '../../../components/AddMoneyCard'
import { BalanceCard } from '../../../components/BalanceCard'

export default async function Transfer() {
    return (
        <div>
            <div className='text-3xl font-medium py-6 dark:text-white'>Transfer</div>
            <div className='flex'>
                <div className='w-96 mr-4'>
                    <AddMoneyCard />
                </div>
                <div className='w-96'>
                    <BalanceCard />
                    <div className='mt-4'>
                        <OnRampTransaction />
                    </div>
                </div>
            </div>
        </div>
    )
}
