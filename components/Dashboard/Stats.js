import React from 'react'

function Stats() {
  return (
    <div className='border border-brand_tertiary rounded shadow-2xl'>
      <div className="flex flex-wrap bg-brand_black rounded text-brand_black">
        <div className="w-full border-r border-brand_tertiary p-6 md:w-6/12 lg:w-3/12 ">
          <p className="text-center text-brand_gray">Average Value</p>
          <div className="center py-2">
            <img width={40} src="/sol.png" />
            <span className="pl-4 text-brand_tertiary text-2xl font-bold ">236.28</span>
          </div>
        </div>
        <div className="w-full border-r border-brand_tertiary p-6 md:w-6/12 lg:w-3/12 ">
          <p className="text-center text-brand_gray">Floor Value</p>
          <div className="center py-2">
            <img width={40} src="/sol.png" />
            <span className="pl-4 text-brand_tertiary text-2xl font-bold ">227.06</span>
          </div>
        </div>
        <div className="w-full border-r border-brand_tertiary p-6 md:w-6/12 lg:w-3/12 ">
          <p className="text-center text-brand_gray">NFTs in Vault</p>
          <div className="center py-2">
            <span className="pl-4 text-brand_tertiary text-2xl font-bold ">81</span>
          </div>
        </div>
        <div className="w-full p-6 md:w-6/12 lg:w-3/12 ">
          <p className="text-center text-brand_gray">Launch Date</p>
          <div className="center py-2">
            <span className="pl-4 text-brand_tertiary text-2xl font-bold ">Nov 21, 2021</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
