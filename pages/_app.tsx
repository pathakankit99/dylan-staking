import type { AppProps } from "next/app";
import Head from 'next/head'
// import "bootstrap/dist/css/bootstrap.css";
//imports for redux
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store";
import { Provider } from "react-redux";

//imports for web3
import dynamic from "next/dynamic";
import { WalletBalanceProvider } from "../hooks/useWalletBalance";
require("@solana/wallet-adapter-react-ui/styles.css");
// import Navbar from "../components/Navbar"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
const WalletConnectionProvider = dynamic(
  () => import("../components/WalletConnection/WalletConnectionProvider"),
  {
    ssr: false,
  }
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletConnectionProvider>
      <WalletBalanceProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <div>
              <Head>
                <title>Stake NFT</title>
                <link rel="icon" href="/favicon.ico" />
              </Head>
              {/* <Navbar /> */}
              <div className="min-h-screen bg-brand_black text-white p-6 lg:px-64">
                <Component {...pageProps} />
              </div>
            </div>
          </PersistGate>
        </Provider>
      </WalletBalanceProvider>
    </WalletConnectionProvider>
  );
}
export default MyApp;
