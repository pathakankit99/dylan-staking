import React, {useState} from 'react';
import NotConnected from './NotConnected';
import TokenCard from './TokenCard';
import StakingCard from './StakingCard';
import MyNFTs from '../MyNFTs';
import Stats from './Stats';
import LineChart from './LineChart';
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
function Dashboard(props) {
  
  const { publicKey, sendTransaction } = useWallet();
    if (!publicKey) {
        return (
          <div>
            <NotConnected />
          </div>
        )
    }
    else {
        return (
          <section className='text-black'>
            <div className="item-center flex justify-between flex-wrap">
              <TokenCard />
              <StakingCard />
            </div>
            <div className="mt-6 bg-white p-6">
              <h5 className="mb-2 text-xl font-medium">My NFTs (0)</h5>
              <MyNFTs />
            </div>
            <div className="mt-6 bg-white p-6">
              <h5 className="mb-2 text-xl font-medium">Community Vault</h5>
                    <Stats />
                    <LineChart/>
            </div>
          </section>
        )
    }
}

export default Dashboard
