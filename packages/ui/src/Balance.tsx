import { Card } from './card'

export const Balance = ({ amount, locked }: { amount: number, locked: number }) => {
    return (<Card title='Balance'>
        <div className='flex justify-between pb-1 mb-4 border-b dark:border-gray-700 text-gray-900 dark:text-white'>
            <div>Unlocked Balance</div>
            <div>{amount} INR</div>
        </div>
        <div className='flex justify-between pb-1 mb-4 border-b dark:border-gray-700 text-gray-900 dark:text-white'>
            <div>Total Locked Balance</div>
            <div>{locked} INR</div>
        </div>
        <div className='flex justify-between pb-1 mb-4 border-b dark:border-gray-700 text-gray-900 dark:text-white'>
            <div>Total Balance</div>
            <div>{amount + locked} INR</div>
        </div>
    </Card>)
}