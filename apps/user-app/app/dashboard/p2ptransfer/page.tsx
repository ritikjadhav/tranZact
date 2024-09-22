import { P2PTransactions } from '../../../components/P2PTransactions'
import { SendMoneyCard } from '../../../components/SendMoneyCard'

export default function P2PTransfer() {    
    return (<div>
        <div className='text-3xl font-poppins font-semibold pb-6 md:py-6 bg-gradient-to-r from-[#1d4ed8] via-[#3b82f6] to-[#60a5fa] text-transparent bg-clip-text'>P2P Transfer</div>
        <SendMoneyCard />
        <div className='my-8'>
            <P2PTransactions />
        </div>
    </div>)
}
