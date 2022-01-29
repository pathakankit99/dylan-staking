import React from 'react';
import { PieChart, Pie } from "recharts";


const data01 = [
  { value: 50, fill: "#2cb67d" },
  { value: 50, fill: "#eeeeee" },
];


function TokenCard() {

  return (
    <div className="w-full lg:w-6/12 lg:pr-3 mb-3 lg:m-0">
      <div className="bg-brand_bg p-6  lg:h-50vh rounded">
        <h5 className=" pb-6 uppercase font-medium text-sm tracking-wider">
          Token Balance
        </h5>
        <p className="text-center text-sm pb-1 tracking-wider">Total</p>
        <p className="text-center text-3xl lg:text-5xl text-brand_tertiary">
          0.00
        </p>
        <div className="py-8">
          <div className="center relative">
            <div className="relative">
              <PieChart height={120} width={120}>
                <Pie
                  data={data01}
                  dataKey="value"
                  cx={55}
                  cy={55}
                  innerRadius={50}
                  outerRadius={60}
                />
              </PieChart>
              <p
                style={{ top: "35%", left: "45%", color: "#eeeeee" }}
                className="absolute text-3xl"
              >
                
              </p>
            </div>
          </div>
          <div className="flex justify-evenly py-2 text-center">
            <div>
              <p className="text-brand_white text-xl">0.00</p>
              <p className='text-sm pt-1' style={{ color: "#64677b" }}>Wallet</p>
            </div>
            <div>
              <p className="text-brand_white text-xl">0.00</p>
              <p className='text-sm pt-1' style={{ color: "#4ce1b6" }}>Unclaimed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TokenCard
