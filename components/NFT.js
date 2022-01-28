import React from 'react';

function NFT(props) {
    return (
      <div className="w-full p-4  md:w-3/12 lg:w-1/3">
        <div className="bg-gray-200">
          <div className="center">
            <img src={props.img} />
          </div>
          <div className='p-3'>
            <h5 className="text-md font-bold">{props.name}</h5>
            {/* <p className="pt-4 text-sm">{props.description}</p> */}
          </div>
        </div>
      </div>
    )
}

export default NFT;
