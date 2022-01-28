import React from 'react'

function Stats() {
  return (
    <div>
      <div className="flex flex-wrap bg-indigo-100">
        <div className="w-full border-r border-indigo-200 p-6 md:w-6/12 lg:w-3/12 ">
          <p className="text-center text-gray-600">Average Value</p>
          <div className="center py-2">
            <img width={40} src="/sol.png" />
            <span className="pl-4 text-2xl font-bold ">236.28</span>
          </div>
        </div>
        <div className="w-full border-r border-indigo-200 p-6 md:w-6/12 lg:w-3/12 ">
          <p className="text-center text-gray-600">Floor Value</p>
          <div className="center py-2">
            <img width={40} src="/sol.png" />
            <span className="pl-4 text-2xl font-bold ">227.06</span>
          </div>
        </div>
        <div className="w-full border-r border-indigo-200 p-6 md:w-6/12 lg:w-3/12 ">
          <p className="text-center text-gray-600">NFTs in Vault</p>
          <div className="center py-2">
            <span className="pl-4 text-2xl font-bold ">81</span>
          </div>
        </div>
        <div className="w-full border-r border-indigo-200 p-6 md:w-6/12 lg:w-3/12 ">
          <p className="text-center text-gray-600">Launch Date</p>
          <div className="center py-2">
            <span className="pl-4 text-2xl font-bold ">Nov 21, 2021</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
