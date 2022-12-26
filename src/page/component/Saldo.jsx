import React from 'react'

export const Saldo = (coin=[], data=[]) => {
    const [total, setTotal] = useState(0)

  const handleTotal =() =>{
    let ans = 0
    datosCoin.map((coin)=>(
      
      data.map((dat)=>
      
       {
          coin.name === dat.id 
        ?(ans += coin.cantidad * dat.current_price)
        :0
       }
      
    
      )
        
      

     
    ))
    setTotal(ans.toFixed(2))
    
  }
  
  useEffect(() => {
   handleTotal() 
  })
  return (
    <div>Saldo</div>
  )
}
