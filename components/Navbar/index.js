import React from 'react'
import Link from 'next/link'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import ConnectToWallet from '../ConnectToWallet';
function Navbar(props) {
  const { publicKey, sendTransaction } = useWallet();
  return (
    <nav className="text-brand_white pb-3 mb-3 w-full flex flex-wrap justify-between border-b border-brand_tertiary">
      <ConnectToWallet className="bg-lightcyan"/>
      <ul className="flex items-center w-full w-full md:w-8/12 justify-center md:justify-start">
        <li className="md:mr-4 cursor-pointer p-3 font-bold uppercase ">
          <Link href="/dashboard">
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="md:mr-4 cursor-pointer p-3 font-bold uppercase ">
          <Link href="/staking">
            <span>Staking</span>
          </Link>
        </li>
      </ul>

      {publicKey && (
        <li className="pl-4 py-1 font-bold uppercase w-full md:w-4/12 flex justify-center md:justify-end my-3 md:m-0">
          <WalletMultiButton />
        </li>
      )}
    </nav>
  );
}

export default Navbar