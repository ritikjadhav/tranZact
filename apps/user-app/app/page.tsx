"use client"
import { useBalance } from '@tranzact/store/useBalance';

export default function Home() {
  const balance = useBalance()
  return (
    <div>Your balance is: {balance}</div>
  );
}
