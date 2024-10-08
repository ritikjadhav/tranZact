import React from 'react'

export const Select = ({ options, onSelect }: {
    options: {
        key: string,
        value: string
    }[],
    onSelect: (value: string) => void
}) => {
    return <select onChange={(e) => {
        onSelect(e.target.value)
    }} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 my-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
        {options.map(option => <option key={option.key} value={option.key}>{option.value}</option>)}
    </select>
}