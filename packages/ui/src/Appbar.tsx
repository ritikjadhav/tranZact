import { Button } from './button'
import { ThemeToggle } from './ThemeToggle'

interface AppbarProps {
    user?: {
        name?: string | null
    }
    onSignin: () => void
    onSignout: () => void
}

export const Appbar = ({ user, onSignin, onSignout }: AppbarProps) => {
    return (
        <div className="flex justify-between px-10 py-3 dark:bg-darkBackground">
            <div className="flex flex-col justify-center dark:text-white font-bold font-roboto text-4xl">
                TranZact
            </div>
            <div className="flex">
                <div className='flex flex-col justify-center'>
                    <ThemeToggle />
                </div>
                <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
            </div>
        </div>
    )
}