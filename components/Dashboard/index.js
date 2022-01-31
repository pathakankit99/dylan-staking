import React from 'react';
import NotConnected from './NotConnected';
import TokenCard from './TokenCard';
import StakingCard from './StakingCard';
import Stats from './Stats';
import LineChart from './LineChart';
import { useWallet } from "@solana/wallet-adapter-react";
import Navbar from "../Navbar"
import NFTCarousel from '../NFTCarousel';
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
          <section className="text-black">
            <Navbar />

            <div className="mt-6 bg-brand_accent rounded my-6 p-6">
              <h5 className=" pb-6 uppercase font-medium text-sm tracking-wider">
                My NFTs
              </h5>
              <NFTCarousel />
            </div>
            <div className="item-center flex justify-between flex-wrap my-6">
              <TokenCard />
              <StakingCard />
            </div>
            <div className="mt-6 bg-brand_accent rounded my-6 p-6">
              <h5 className=" pb-6 uppercase font-medium text-sm tracking-wider">
                Community Vault
              </h5>
              <Stats />
              <LineChart />
            </div>
          </section>
        );
    }
}

export default Dashboard
