
export const AuthHeader = ({ label }: { label: string }) => {
    return (
        <div className='flex justify-center font-roboto font-bold text-4xl mt-24 mb-12'>
            {label} to&nbsp;
            <span className='bg-gradient-to-r from-[#1e40af] via-[#2563eb] to-[#3b82f6] text-transparent bg-clip-text'>TranZact</span>
        </div>
    )
}