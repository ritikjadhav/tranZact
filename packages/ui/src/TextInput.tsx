import { ChangeEvent } from 'react'

type InputType = 'text' | 'number' | 'email' | 'password'

interface TextInputProps<T extends InputType> {
    type: T
    label?: string
    placeholder: string
    onChange: (value: T extends 'number' ? number : string) => void
}

export const TextInput = <T extends InputType>({ type, label, placeholder, onChange }: TextInputProps<T>) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = type === 'number' ? Number(e.target.value) : e.target.value
        onChange(value as T extends 'number' ? number : string)
    }

    if (label) {
        return (
            <div className='mt-4'>
                <label className='block font-medium text-gray-900 dark:text-white'>{label}</label>
                <input
                    onChange={handleChange}
                    type={type}
                    placeholder={placeholder}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-customBlue focus:border-customBlue w-full my-3 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                />
            </div>
        )
    }

    return (
        <input
            onChange={handleChange}
            type={type}
            placeholder={placeholder}
            className='font-poppins text-base text-gray-900 w-full my-3 py-3 px-4 rounded-lg placeholder:font-bold placeholder-gray-500 focus:ring-customBlue focus:border-customBlue bg-gray-100 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white'
        />
    )
}