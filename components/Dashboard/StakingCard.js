import React from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";


const data01 = [
  { value: 0, fill: "#2cb67d" },
  { value: 100, fill: "#eeeeee" },
];

const data02 = [
  { value: 60, fill: "#ff4861" },
  { value: 40, fill: "#eeeeee" },
];

const StakingCard = () => {

  return (
    <div className="w-full lg:w-6/12 lg:pl-3 relative mt-3 lg:m-0">
      <div className="bg-brand_bg p-6  lg:h-50vh rounded">
        <h5 className=" pb-6 uppercase font-medium text-sm tracking-wider">
          Staking
        </h5>
        <div className="flex flex-wrap">
          <div className="pb-6 lg:pb-0 chart-1 w-full md:w-6/12 p-2 text-center">
            <div className="center relative">
              <PieChart height={120} width={120}>
                <Pie
                  data={data01}
                  dataKey="value"
                  cx={55}
                  cy={55}
                  innerRadius={55}
                  outerRadius={60}
                />
              </PieChart>
              {/* <p
                style={{ top: "35%", left: "38%", color: "#b8e986" }}
                className="absolute text-3xl"
              >
                0%
              </p> */}
            </div>
            <div className="info pt-4">
              <p className="text-3xl" style={{ color: "#2cb67d" }}>
                0%
              </p>
              <p>My NFTs Staked</p>
            </div>
          </div>
          <div className="chart-2 w-full md:w-6/12 p-2 text-center">
            <div className="center relative">
              <PieChart height={120} width={120}>
                <Pie
                  data={data02}
                  dataKey="value"
                  cx={55}
                  cy={55}
                  innerRadius={55}
                  outerRadius={60}
                />
              </PieChart>
              {/* <p
                style={{ top: "35%", left: "38%", color: "#ff4861" }}
                className="absolute text-3xl"
              >
                78%
              </p> */}
            </div>
            <div className="info pt-4">
              <p className="text-3xl" style={{ color: "#ff4861" }}>
                60%
              </p>
              <p>Overall NFTs Staked</p>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="text-center">
            <p className="uppercase text-brand_tertiary font-medium tracking-wider pt-6 text-xl">
              0 Sol /Day
            </p>
            <p>Rewards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakingCard;

