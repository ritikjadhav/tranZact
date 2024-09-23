
export const PageHeading = ({ title }: { readonly title: string }) => {
    return (
        <div className='text-3xl font-poppins font-semibold pb-6 md:pt-6 md:pb-10 bg-gradient-to-r from-[#1d4ed8] via-[#3b82f6] to-[#60a5fa] text-transparent bg-clip-text dark:text-white'>{title}</div>
    )
}