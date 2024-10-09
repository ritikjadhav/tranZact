'use client'

import { Appbar } from '@repo/ui/Appbar'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const AppbarClient = () => {
    const { data: session, status } = useSession()
    const router = useRouter()
     
    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/signin')
        }
    }, [status, router])

    return (
        <div>
            <Appbar
                user={session?.user}
                onSignin={signIn}
                onSignout={async () => {
                    await signOut({ callbackUrl: '/signin'})
                }}
            />
        </div>
    )
}
