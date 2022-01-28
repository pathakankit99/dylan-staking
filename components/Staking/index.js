import React from 'react';
import Staked from "./Staked"
import CurrentReward from "./CurrentReward"
import TotalReward from "./TotalReward"
import MyNFTs from "../MyNFTs"
function index() {
  return (
    <div className='text-black'>
      <div className="justify-between flex flex-wrap">
        <Staked />
        <CurrentReward />
        <TotalReward />
      </div>
      <div className="mt-6 bg-white p-6">
        <h5 className="mb-2 text-xl font-medium">My NFTs (0)</h5>
        <MyNFTs />
      </div>
    </div>
  )
}

export default index;
