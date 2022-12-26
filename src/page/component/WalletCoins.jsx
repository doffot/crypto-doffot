import { useEffect, useState } from "react";
import  axios  from 'axios';
import { CardWallet } from "./CardWallet";
import { useDispatch, useSelector } from "react-redux";
import { moreGetCoins, selectCoin } from "../../store/wallet/thuks";

export const WalletCoins = () => {
 
   
  const dispatch = useDispatch();
  const { coins=[], page } = useSelector(state => state.wallet)
  
  
    useEffect(() => {
      dispatch(moreGetCoins())
      dispatch(selectCoin())
    },[])
  return (
    <>
        <CardWallet data={coins}/>
    </>
  )
}
