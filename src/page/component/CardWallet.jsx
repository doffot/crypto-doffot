import { useEffect, useState } from "react";
import { FiArrowDown, FiArrowDownRight, FiArrowUp } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import './cardwallet.css'
import { Monedas } from "./Monedas";

const datosCoin = [
  {
    name :'bitcoin',
    cantidad : 0.0005,
    precio : 0,
  },
  {
    name :'ethereum',
    cantidad : 0.025,
    precio : 0,
  },
  {
    name :'cardano',
    cantidad : 40,
    precio : 0,
  },
  {
    name :'ripple',
    cantidad : 30,
    precio : 0,
  },
  {
    name :'binancecoin',
    cantidad : 1,
    precio : 0,
  },
  ]
  let t =0;
 let t1=[];



export const CardWallet = ({data}) => {

const { coins } = useSelector( state => state.wallet);



  return (
    <div className='card_wallet'>
        <div className="title_box">
            <div className="title_coin ml text_title">
              <span>Mis criptos</span>
            </div>
           
           
        </div>
    


    {
      datosCoin.map(dato=>
        <div key={dato.name}>
        {
          data.map(dat =>
              <div key={dat.id}>{dat.id === dato.name ?(<div className="box_coin">
                
              <div className="img_coin">
                <img src={dat.image} alt="" />
                <span>{dat.name}</span>
              </div>
               <div className="cantidad_coin">
                  <span className="ml da">{dato.cantidad} <span className="sb">{dat.symbol}</span> </span> 
                  <span className="cp">{t=(dat.current_price * dato.cantidad).toFixed(2)} <span className="usd">usd</span> </span>               
             </div>
             <div className="valor_coin">
                
             </div>             
           </div>) : ''} </div>
            )
        }
        </div>

        )
    }


 
    
    </div>
  )
}
