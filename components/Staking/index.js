import React from "react";
import Staked from "./Staked";
import NotConnected from "../Dashboard/NotConnected";
import CurrentReward from "./CurrentReward";
import TotalReward from "./TotalReward";
import NFTCarousel from "../NFTCarousel";
import { useWallet } from "@solana/wallet-adapter-react";
import Navbar from "../Navbar";
function Staking() {
  const { publicKey, sendTransaction } = useWallet();
  if (!publicKey) {
    return (
      <div>
        <NotConnected />
      </div>
    );
  } else {
    return (
      <div className="text-black">
        <Navbar />
        <div className="item-center flex justify-between flex-wrap my-6">
          <Staked />
          <CurrentReward />
          <TotalReward />
        </div>
        <div className="mt-6 bg-brand_bg rounded my-6 p-6">
          <h5 className=" pb-6 uppercase font-medium text-sm tracking-wider">
            My NFTs
          </h5>
          <NFTCarousel />
        </div>
      </div>
    );
  }
}

export default Staking;
