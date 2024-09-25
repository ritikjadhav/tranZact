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
            // router.push('/api/auth/signin') // uncomment this line after changing the database url
        }
    }, [status, router])

    return (
        <div>
            <Appbar
                user={session?.user}
                onSignin={signIn}
                onSignout={async () => {
                    await signOut({ callbackUrl: '/api/auth/signin'})
                }}
            />
        </div>
    )
}
