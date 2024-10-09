'use client'

import { Button } from '@repo/ui/button'
import { TextInput } from '@repo/ui/TextInput'
import { AuthHeader } from '@repo/ui/AuthHeader'
import { AuthProviders } from '@repo/ui/AuthProviders'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export const SignIn = () => {
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [phoneError, setPhoneError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const router = useRouter()

    const handleLogin = async () => {
        setPhoneError(phone.length < 1)
        setPasswordError(password.length < 1)

        if (phoneError || passwordError) {
            return
        }

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
            <form>
                <TextInput
                    type='text'
                    placeholder='Mobile Number'
                    required
                    emptyInputError={phoneError}
                    onChange={(value) => {
                        setPhone(value)
                        setPhoneError(value.length < 1)
                    }}
                />
                <TextInput
                    type='password'
                    placeholder='Password'
                    required
                    emptyInputError={passwordError}
                    onChange={(value) => {
                        setPassword(value)
                        setPasswordError(value.length < 1)
                    }}
                />
                <Button onClick={handleLogin}>Log In</Button>
            </form>
            <AuthProviders to='/signup' label='Sign up now' />
        </div>
    )
}
