
export const TextInput = ({ label, placeholder, onChange }: { 
    label: string,
    placeholder: string,
    onChange: (value: string) => void
}) => {
    return (<div>
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>{label}</label>
        <input onChange={(e) => {
            onChange(e.target.value)
        }} type="text" placeholder={placeholder} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' />
    </div>)
}