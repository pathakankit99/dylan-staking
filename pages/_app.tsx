import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { WalletBalanceProvider } from "../hooks/useWalletBalance";
import Header from "../components/Layout/Header";
require("@solana/wallet-adapter-react-ui/styles.css");
import Navbar from "../components/Navbar"
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
        <div>
          <Navbar />
          <div className="min-h-screen bg-indigo-100 p-6 lg:px-64">
            <Component {...pageProps} />
          </div>
        </div>
      </WalletBalanceProvider>
    </WalletConnectionProvider>
  );
}
export default MyApp;
