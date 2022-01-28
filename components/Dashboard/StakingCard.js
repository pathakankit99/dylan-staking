import React from 'react';

function StakingCard() {
  return (
    <div className="mr-6 w-full rounded bg-white p-6 lg:w-5/12">
      <div className=" mb-2 flex justify-between border-b border-black pb-2 text-xl font-medium">
        <span>Staking</span>
        <span className='bg-indigo-900 text-white text-md font-normal px-4 py-1 flex items-center'>Rewards: 0/day</span>
      </div>
      <div className=" flex justify-between py-3">
        <span>Me</span>
        <span>0/0</span>
      </div>
      <div className=" flex justify-between py-3">
        <span>Overall</span>
        <span>1835/2222</span>
      </div>
    </div>
  )
}

export default StakingCard;
