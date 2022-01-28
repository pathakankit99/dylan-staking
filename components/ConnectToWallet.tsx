import { useEffect, useMemo, useState } from "react";

import * as anchor from "@project-serum/anchor";

import { existsOwnerSPLToken, getNFTsForOwner } from "../utils/candyMachine";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
// import useWalletBalance from "../hooks/useWalletBalance";
import { useWallet } from "@solana/wallet-adapter-react";
import useWalletNfts from "../hooks/useWalletNFTs";
import { useDispatch } from "react-redux";
export interface HomeProps {
  candyMachineId?: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  txTimeout: number;
  rpcHost: string;
}
function ConnectToWallet(props: HomeProps) {
    const dispatch = useDispatch();
    const rpcUrl = props.rpcHost;
  const wallet = useWallet();
  const [isLoading,nfts, isSPLExists] = useWalletNfts(props);
    const anchorWallet = useMemo(() => {
      if (
        !wallet ||
        !wallet.publicKey ||
        !wallet.signAllTransactions ||
        !wallet.signTransaction
      ) {
        return;
      }

      return {
        publicKey: wallet.publicKey,
        signAllTransactions: wallet.signAllTransactions,
        signTransaction: wallet.signTransaction,
      } as anchor.Wallet;
    }, [wallet]);

  useEffect(() => {
    (async () => {
         
       
      if (!anchorWallet) {
        console.log("disconnected");
        dispatch({
          type: "WALLET_ID",
          payload: null,
        });
        dispatch({
          type: "SETNFT",
          payload: null,
        });
        
           return;
         }
        //  console.log(anchorWallet, "anchorWallet");
         if (anchorWallet?.publicKey) {
           dispatch({
             type: "WALLET_ID",
             payload: anchorWallet?.publicKey?.toString(),
           });
         }


         if (props?.connection && anchorWallet?.publicKey) {
           const nftsForOwner = await getNFTsForOwner(
             props.connection,
             anchorWallet?.publicKey
           );

           console.log(nftsForOwner, "NFTsForOwner");
         }

         //setNfts(nftsForOwner as any);


       })();
     }, [anchorWallet, props.candyMachineId, props.connection]);
  
  useEffect(() => {
    if (nfts) {
      dispatch({
        type: "SETNFT",
        payload: nfts,
      });
      // console.log(nfts,'nfts added')
    }
  },[nfts])



  return <></>;
}

export default ConnectToWallet;
