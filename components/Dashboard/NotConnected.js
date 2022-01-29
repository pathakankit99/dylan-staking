import React from 'react';

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
function NotConnected() {
    return (
      <div className="center p-6">
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold text-center py-6 ">
            Staking <span className='text-brand_accent'>Project</span>
          </h1>

          <p className="pb-4 text-2xl">
            Log in with your web3 provider to continue
          </p>
          <div className="center">
            <WalletMultiButton>Connect Wallet</WalletMultiButton>
          </div>
        </div>
      </div>
    );
}

export default NotConnected;
