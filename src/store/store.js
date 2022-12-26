import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { modalSlice } from './modal'
import { walletSlice } from './wallet/walletSlice'



export const store = configureStore({
    reducer: {
    
     wallet : walletSlice.reducer,
     auth   : authSlice.reducer,
     modal  : modalSlice.reducer,
    },
  })