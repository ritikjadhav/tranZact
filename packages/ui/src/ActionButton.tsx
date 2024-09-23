import { Button } from './button'
import { IconPlus, IconSend } from '@tabler/icons-react'

export const ActionButton = ({ label }: { label: string }) => (
    <Button label='true' onClick={() => {}}>
        <div className='flex'>
            <div className='flex flex-col justify-center'>
                {label === 'Add' ? (
                    <IconPlus size={20} className='mr-2' />
                ) : (
                    <IconSend size={20} className='mr-2' />
                )}
            </div>
            <div>{label}</div>
        </div>
    </Button>
)
