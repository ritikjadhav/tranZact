"use client"

import { Button } from '@repo/ui/button';
import { Appbar } from '@repo/ui/Appbar';
import { useBalance } from '@tranzact/store/useBalance';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const balance = useBalance()
  const session = useSession()

  return (
    <div>
      <Appbar user={session.data?.user} onSignin={signIn} onSignout={signOut}/>
      <div>Your balance is: {balance}</div>
    </div>
  );
}
