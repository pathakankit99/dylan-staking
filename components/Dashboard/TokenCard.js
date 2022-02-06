import React from 'react';
import {  Progress } from "reactstrap";



function TokenCard() {

  return (
    <div className="w-full lg:w-6/12 lg:pr-3 mb-3 lg:m-0">
      <div className="bg-brand_accent p-6  lg:h-50vh rounded">
        <h5 className=" pb-6 uppercase font-medium text-sm tracking-wider">
          Token Balance
        </h5>
        <p className="text-center text-white text-sm pb-1 tracking-wider">
          Total
        </p>
        <p className="text-center text-3xl lg:text-5xl text-green-300">15.00</p>
        <div className="py-16 lg:py-16">
          <div className="">
            <Progress color="success" className="bg-green-500" value="50">
              50%
            </Progress>
          </div>
          <div className="flex justify-evenly py-2 text-center">
            <div>
              <p className="text-sm text-white pt-1">Wallet</p>
              <p className="text-white text-xl text-brand_tertiary">5.00</p>
            </div>
            <div>
              <p className="text-sm pt-1 text-white">Unclaimed</p>
              <p className=" text-xl text-brand_tertiary">10.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TokenCard
