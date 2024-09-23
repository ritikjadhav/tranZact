import { OnRampTransaction } from '../../../components/OnRampTransaction'
import { AddMoneyCard } from '../../../components/AddMoneyCard'
import { BalanceCard } from '../../../components/BalanceCard'
import { PageHeading } from '@repo/ui/PageHeading'

export default function Transfer() {
    return (
        <div className='pb-8'>
            <PageHeading title='Transfer' />
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
