"use client"
import { SessionProvider } from 'next-auth/react';
import { RecoilRoot } from "recoil";
import { AppbarClient } from '../components/AppbarClient';

export const Providers = ({children}: {children: React.ReactNode}) => {
    return (
        <RecoilRoot>
            <SessionProvider>
                {children}
            </SessionProvider>
        </RecoilRoot>
    )
}