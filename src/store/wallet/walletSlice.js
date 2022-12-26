import { createSlice } from '@reduxjs/toolkit';
export const walletSlice = createSlice({
 name: 'wallet',
initialState: {
    page :0,
    coins :[],
    mycoins:null,
    isloading:false

 },
 reducers: {
    startloadingCoins: (state) =>{
        state.isloading = true;

    },
    moreSetCoins: (state,action) =>{
        state.isloading = false;
        state.page = action.payload.page
        state.coins = action.payload.coins;
    },
    lessSetcoins : (state,action) =>{
        state.isloading = false;
        state.page = action.payload.page
        state.coins = action.payload.coins;
    }
 }
});


// Action creators are generated for each case reducer function
export const { startloadingCoins, moreSetCoins, lessSetcoins} = walletSlice.actions;