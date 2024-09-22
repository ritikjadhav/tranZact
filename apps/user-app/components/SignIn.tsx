'use client'

import { Button } from '@repo/ui/button'
import { TextInput } from '@repo/ui/TextInput'
import { AuthHeader } from '@repo/ui/AuthHeader'
import { AuthProviders } from '@repo/ui/AuthProviders'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export const SignIn = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()

    const handleLogin = async () => {
        const res = await signIn('credentials', {
            redirect: false,
            phone,
            password
        })

        if (res?.ok) {
            router.push('/dashboard')
        } else {
            console.error('Login failed:', res?.error)
        }
    }

    return (
        <div className='sm:w-2/3 lg:w-1/3 mx-6'>
            <AuthHeader label='Sign in' />
            <TextInput type='text' placeholder='Mobile Number' onChange={(value) => setPhone(value)} />
            <TextInput type='password' placeholder='Password' onChange={(value) => setPassword(value)} />
            <Button onClick={handleLogin}>Log In</Button>
            <AuthProviders to='/signup' label='Sign up now' />
        </div>
    )
}
