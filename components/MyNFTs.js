import React from 'react';
import NFT from './NFT';
import { useSelector, useDispatch } from "react-redux";
function MyNFTs() {
  const { user, wallet_id, nft_list } = useSelector((state) => ({
    wallet_id: state.app_reducer.wallet_id,
    nft_list: state.app_reducer.nft_list,
  }));
    return (
      <div className='flex flex-wrap overflow-y-scroll h-96'>
        {
          nft_list?.map((item) => (
            <NFT
              key={item.image}
              name={item.name}
              description={item.description}
              img={item.image}
            />
          ))
        }
      </div>
    )
}

export default MyNFTs;
