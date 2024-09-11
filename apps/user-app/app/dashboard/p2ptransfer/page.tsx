import { P2PTransactions } from '../../../components/P2PTransactions';
import { SendMoneyCard } from '../../../components/SendMoneyCard';

export default async function P2PTransfer() {    
    return (<div>
        <div className='text-3xl font-medium py-6'>P2P Transfer</div>
        <SendMoneyCard />
        <div className='mt-4'>
            <P2PTransactions />
        </div>
    </div>)
}
