import { useEffect, useState } from "react";
import  axios  from 'axios'
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import  './monedas.css'
import btc from '../.././assets/btc.png'
import { Cards } from "./Cards";
import { useDispatch, useSelector } from "react-redux";
import { moreGetCoins, lessGetCoins } from "../../store/wallet/thuks";

export const Monedas = () => {
 
 const dispatch = useDispatch();
 const { coins=[], page } = useSelector(state => state.wallet)

 useEffect(() =>{
  dispatch(moreGetCoins())
 },[])
 

  return (
    <div className="monedas ">
      <div className="container cortar">
        <div className="left">
          <h2>Top Criptos</h2>
          <p>Su inversión en BTC, ETH, ADA y otras criptos</p>
          
        </div>

        <div className="right">
          <Cards data={coins} />
        </div>
      </div>
    </div>
  )
}
