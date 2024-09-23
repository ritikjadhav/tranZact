import { PageHeading } from '@repo/ui/PageHeading'
import { P2PTransactions } from '../../../components/P2PTransactions'
import { SendMoneyCard } from '../../../components/SendMoneyCard'

export default function P2PTransfer() {    
    return (<div>
        <PageHeading title='P2P Transfer' />
        <SendMoneyCard />
        <div className='my-8'>
            <P2PTransactions />
        </div>
    </div>)
}
