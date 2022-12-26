import axios from "axios"
import { coinsApi } from "../../api/coinsApi"
import { lessSetcoins, moreSetCoins, startloadingCoins } from "./walletSlice"


export const moreGetCoins = (page =0) =>{
    return async(dispatch, getState) =>{
        dispatch(startloadingCoins())

        const  { data } = await coinsApi.get(`coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`)
        
        dispatch(moreSetCoins({coins : data, page : page +1}))
        console.log(data);
        
    }
}

export const lessGetCoins = (page =0) =>{
    return async(dispatch, getState) =>{
        dispatch(startloadingCoins())

        const  { data } = await coinsApi.get(`coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`)
        if (page > 0)
        dispatch(lessSetcoins({coins : data, page : page -1}))
        
    }
}

export const selectCoin = () =>{
    return async(dispatch, getState) =>{
        dispatch(startloadingCoins())
        const  { data } = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin?market_data=true')
        console.log(data.bitcoin);
    }
    
}