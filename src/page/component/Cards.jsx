import { FiArrowDown, FiArrowDownRight, FiArrowUp } from "react-icons/fi";
import './cards.css'

export const Cards = ({data}) => {
  return (
    <div className='card'>
    {
        data.map(dat=>
         <div key={dat.id} className='box_coins' >

          <div className="box_coin">
             <div className="img_coin">
               <img src={dat.image} alt="" />
             </div>
              <div className="name_coin">
                <h3>{dat.name}</h3>
                <p>{dat.symbol}</p>
            </div>
          </div>
            
          <div className="box_data">
           <div className="box_price">
             <span>${dat.current_price.toFixed(2)}</span>                            
           </div>
           <div className="box_change">
            {dat.price_change_percentage_24h< 0
              ?(<span className="red">                    
                 {dat.price_change_percentage_24h.toFixed(2)}%
                 <FiArrowDown className="icon" />
                </span>) 
              :(<span className="green">                    
                 {dat.price_change_percentage_24h.toFixed(2)}%
                 <FiArrowUp className="icon" />
              </span>)
            }         
            </div>
          </div>
            
         </div>   
            )
    }
    </div>
  )
}
