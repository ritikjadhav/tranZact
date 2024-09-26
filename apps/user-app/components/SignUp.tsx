'use client'

import { Button } from '@repo/ui/button'
import { TextInput } from '@repo/ui/TextInput'
import { AuthHeader } from '@repo/ui/AuthHeader'
import { AuthProviders } from '@repo/ui/AuthProviders'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export const SignUp = () => {
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const router = useRouter()

    const handleLogin = async () => {
        const res = await signIn('credentials', {
            redirect: false,
            name,
            phone,
            email,
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
            <AuthHeader label='Sign up' />
            <form>
                <TextInput type='text' placeholder='Name' onChange={(value) => setName(value)} />
                <TextInput type='text' placeholder='Mobile Number' onChange={(value) => setPhone(value)} />
                <TextInput type='text' placeholder='Email' onChange={(value) => setEmail(value)} />
                <TextInput type='password' placeholder='Password' onChange={(value) => setPassword(value)} />
                <Button onClick={handleLogin}>Sign up</Button>
            </form>
            <AuthProviders to='/signin' label='Log in now' />
        </div>
    )
}
