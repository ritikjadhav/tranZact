import { AuthProps } from '@tranzact/store/types'
import Link from 'next/link'
import { signIn } from "next-auth/react"

export const AuthProviders = ({ to, label }: AuthProps) => {
    return (
        <div>
            <div className='flex justify-center my-3 text-sm font-roboto dark:text-white'>
                {label === 'Sign up now' ? 'Don\'t' : 'Already'} have an account?{' '}
                <Link href={to} className='ml-2 text-sky-500 hover:underline'>{label}</Link>
            </div>
            <div className='flex justify-center py-3'>
                OR
            </div>
            <button onClick={() => signIn('google', { callbackUrl: '/dashboard' })} className="flex justify-center border drop-shadow-md bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-semibold font-poppins rounded-lg text-base px-5 py-2.5 text-center items-center dark:focus:ring-gray-500 dark:hover:bg-gray-700 me-2 my-3 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px"><path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" /><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" /><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" /><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" /></svg>
                <span className='ml-4'>Sign in with Google</span>
            </button>
            <button onClick={() => signIn('github', { callbackUrl: '/dashboard' })} className="flex justify-center border drop-shadow-md bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-semibold font-poppins rounded-lg text-base px-5 py-2.5 text-center items-center dark:focus:ring-gray-500 dark:hover:bg-gray-700 me-2 my-6 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" width="30px" height="30px"><path d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022	s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z" /></svg>
                <span className='ml-4'>Sign in with Github</span>
            </button>
        </div>
    );
}