import { ClipLoader } from 'react-spinners'

export const Loader = () => {
    return (
        <div className='flex justify-center items-center fixed inset-0 bg-white bg-opacity-50 z-50'>
            <ClipLoader color='#2563eb' size={150} aria-label="Loading Spinner" />
        </div>
    )
}