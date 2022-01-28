import React from 'react'
import Link from 'next/link'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
function index(props) {
  const { publicKey, sendTransaction } = useWallet();
  return (
    <navbar className="flex items-center justify-between bg-indigo-700 p-6 text-white lg:px-64">
      <div>
        <Link href="/">
          <img
            width={100}
            src="https://den.billionairecoyotecartel.com/_next/image?url=%2Fimg%2Flogo.svg&w=128&q=75"
          />
        </Link>
      </div>
      <div>
        <ul className="flex items-center">
          <li className="mr-4 cursor-pointer border border-indigo-700 px-4 py-1 font-bold uppercase hover:border-indigo-500">
            <Link href="/dashboard">
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="mr-4 cursor-pointer border border-indigo-700 px-4 py-1 font-bold uppercase ">
            <Link href="/staking">
              <span>Staking</span>
            </Link>
          </li>
          {/* <li className="mr-4 cursor-pointer border border-indigo-700 px-4 py-1 font-bold uppercase hover:border-indigo-500">
            <div>
              <p className="text-xs font-normal">0xx01...6587</p>
              <p className="text-xs font-normal">Connected</p>
            </div>
          </li> */}
          {publicKey && (
            <li className="mr-4 cursor-pointer border border-indigo-700 px-4 py-1 font-bold uppercase">
              <WalletMultiButton />
            </li>
          )}
        </ul>
      </div>
    </navbar>
  );
}

export default index
