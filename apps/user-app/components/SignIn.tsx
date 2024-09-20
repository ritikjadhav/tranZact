'use client'

import { Button } from '@repo/ui/button'
import { TextInput } from '@repo/ui/TextInput'
import { AuthHeader } from '@repo/ui/AuthHeader'
import { AuthProviders } from '@repo/ui/AuthProviders'

export const SignIn = () => {
    return (
        <div className='sm:w-2/3 lg:w-1/3 mx-6'>
            <AuthHeader label='Sign in' />
            <TextInput type='email' placeholder='Email' onChange={() => {}} />
            <TextInput type='password' placeholder='Password' onChange={() => {}} />
            <Button onClick={() => {}}>Log In</Button>
            <AuthProviders to='/signup' label='Sign up now' />
        </div>
    )
}