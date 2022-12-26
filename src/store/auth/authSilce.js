import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
 name: 'auth',
initialState: {
    status      : 'checking',
    ok          : false,
    uid         : null,
    email       : null,
    displayName : null,
    photoURL    : null,
    telefono    : null,
    errorMessage: null
 },
 reducers: {
    login : (state,{payload}) =>{
        state.status      ='authenticated';
        state.ok          = true;
        state.uid         = payload.uid;
        state.email       = payload.email;
        state.displayName = payload.displayName;
        state.photoURL    = payload.photoURL;
        state.telefono    = payload.telefono;
        state.errorMessage= null;
    },
    logout: (state,{payload}) =>{
        state.status       ='not-authenticated';
        state.ok           = false;
        state.uid          = null;
        state.email        = null;
        state.displayName  = null;
        state.photoURL     = null;
        state.telefono     = null;
        state.errorMessage = payload?.errorMessage;
    },
    checkingCredentials: (state)=>{
        state.status ='checking'

    }
 }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;