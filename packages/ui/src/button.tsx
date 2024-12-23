import { ReactNode } from 'react'
import { cn } from './utils/cn'

interface ButtonProps {
    children: ReactNode
    onClick: () => void
    label?: string
}

export const Button = ({ children, onClick, label }: ButtonProps) => {
    return (
        <button
            type='button'
            className={cn(
                'text-white bg-gradient-to-r hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-[#2c57d8] dark:focus:ring-[#182757] font-semibold rounded-lg text-base w-full my-3 px-5 py-2.5 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg',
                label ? 'from-[#057A55] via-[#0C9E75] to-[#18C49B] rounded-xl py-3 px-6 lg:py-3.5 lg:px-7' : 'from-[#3b82f6] via-[#2563eb] to-[#1e3a8a]'
            )}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
