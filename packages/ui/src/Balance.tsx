
export const Balance = ({ amount, locked }: { amount: number, locked: number }) => {
    return (<div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-black dark:border-gray-700">
        <h5 className="text-xl mb-6 font-medium text-gray-900 dark:text-white">Balance</h5>

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
    </div>)
}