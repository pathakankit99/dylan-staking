import React from 'react';

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
function NotConnected() {
    return (
      <div className="center p-6">
        <div>
          <p className="pb-4 text-2xl">
            Log in with your web3 provider to continue
          </p>
          <div className="center">
            <WalletMultiButton />
          </div>
        </div>
      </div>
    );
}

export default NotConnected;
