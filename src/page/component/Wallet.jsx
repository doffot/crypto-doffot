import { useEffect, useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { moreGetCoins } from "../../store/wallet/thuks";
import { BsCashCoin } from "react-icons/bs";
import './wallet.css'
import { WalletCoins } from "./WalletCoins";
import { Account } from "./Account";

const datosCoin = [
    {
      name :'bitcoin',
      cantidad : 0.0005,
      precio : 16000,
    },
    {
      name :'ethereum',
      cantidad : 0.025,
      precio : 1200,
    },
    {
      name :'cardano',
      cantidad : 40,
      precio : 0.33,
    },
    {
      name :'ripple',
      cantidad : 30,
      precio : 0.33,
    },
    {
      name :'binancecoin',
      cantidad : 1,
      precio : 0,
    },
    ]

export const Wallet = () => {
    const dispatch = useDispatch()
    const { coins } = useSelector( state => state.wallet) 

    const [total, setTotal] = useState(0)

  const handleTotal =() =>{
    let ans = 0
    datosCoin.map((coin)=>(
      
      coins.map((dat)=>
      
       {
          coin.name === dat.id 
        ?(ans += coin.cantidad * dat.current_price)
        :10
       }
      
    
      )
        
      

     
    ))
    setTotal(ans.toFixed(2))
    
  }
  
  useEffect(() => {
   handleTotal() 
  })

   {/*  useEffect(() => {
     dispatch(moreGetCoins() );
    },[]) */}
    
  return (
   <div className="wallet">
        <div className="sider_bar">
            
           
            <div className="balance">
                <div className="title_balance">
              {  /*  <BsCashCoin className="icon_bs" /> */}
                 <p>Mi Balance</p>
                 </div>
                <div className="total">
                    <h3>{ total } <p>$</p></h3>                    
                </div>                
            </div>


             <div className="all_cryptos">
            
                    <WalletCoins />    
            </div> 


           {/*  <div className="my_cryptos">
                <h3>Mis Criptomonedas</h3>                
            </div> */}
            
        </div>   
   </div>
  )
}
