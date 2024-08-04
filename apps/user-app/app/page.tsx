"use client"

import { Button } from '@repo/ui/button';
import { Appbar } from '@repo/ui/Appbar';
import { useBalance } from '@tranzact/store/useBalance';

export default function Home() {
  const balance = useBalance()
  const user = {
    name: 'ritik'
  }
  return (
    <div>
      <Appbar user={user} onSignin={() => {}} onSignout={() => {}}/>
      <div>Your balance is: {balance}</div>
    </div>
  );
}
