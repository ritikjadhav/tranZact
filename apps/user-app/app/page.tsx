"use client"

import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { useBalance } from '@tranzact/store/useBalance';

export default function Home() {
  const balance = useBalance()
  return (
    <div>Your balance is: {balance}</div>
  );
}
