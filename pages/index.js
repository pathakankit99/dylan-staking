import React,{useEffect} from "react"
import { useRouter } from "next/router";
import { useWallet } from "@solana/wallet-adapter-react";
import NotConnected from "../components/Dashboard/NotConnected";
export default function Home() {
  const { publicKey } = useWallet();
  const router = useRouter();
  useEffect(() => {
    if (!publicKey) {
      return (
        <div className="center h-80vh">
          <NotConnected />
        </div>
      );
    } else {
      router.push("/dashboard");
    }
  }, [publicKey]);

  return <></>;
}
