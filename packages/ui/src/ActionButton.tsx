import { Button } from './button'
import { useRouter } from 'next/navigation'
import { IconPlus, IconSend } from '@tabler/icons-react'

export const ActionButton = ({ label, route }: { label: string, route: string }) => {
    const router = useRouter()

    return (
        <Button label='true' onClick={() => router.push(route)}>
            <div className='flex'>
                <div className='flex flex-col justify-center'>
                    {label === 'Add' ? (
                        <IconPlus size={20} className='mr-2' />
                    ) : (
                        <IconSend size={20} className='mr-2' />
                    )}
                </div>
                <div className='text-lg'>{label}</div>
            </div>
        </Button>
    )
}
