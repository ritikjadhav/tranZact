import { AddMoney } from '@repo/ui/AddMoney'
import { Balance } from '@repo/ui/Balance'

export default function Transfer() {
    return <div className='flex'>
        <div className='w-96 mr-8'>
            <AddMoney />
        </div>
        <div className='w-96'>
            <Balance amount={0} locked={0} />
        </div>
    </div>
}
