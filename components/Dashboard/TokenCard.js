import React from 'react'

function TokenCard() {
  return (
    <div className="mr-6 w-full rounded bg-white p-6 lg:w-5/12">
      <div className=" flex justify-between border-b border-black pb-2 text-xl font-medium mb-2">
        <span>Token Balance</span>
        <span>0.00</span>
      </div>
      <div className=" flex justify-between py-3">
        <span>Wallet</span>
        <span>0.00</span>
      </div>
      <div className=" flex justify-between py-3">
        <span>Unclaimed</span>
        <span>0.00</span>
      </div>
    </div>
  )
}

export default TokenCard
