
import {   loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSilce"



export const chekingAuthentication = (email,password) =>{
    return async(dispatch)=>{
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = ()=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials())

        const result =await singInWithGoogle()
        if (!result.ok) return dispatch(logout(result.errorMessage))

        dispatch(login(result))
    }
}

export const startCreatingUserwithEmailPassword = ({email,password, displayName, telefono }) =>{
    return async(dispatch) =>{
        dispatch( checkingCredentials() )

       const {ok, uid, photoURL, errorMessage}= await registerUserWithEmailPassword({email, password,displayName,telefono});

        if (!ok) return dispatch(logout(errorMessage))

        dispatch(login({uid, displayName, email, photoURL,telefono}))
        
       
    }

}

 export const startloginWithEmailPassword = (email,password) =>{
    return async(dispatch)=>{
        dispatch(checkingCredentials())

        const result = await loginWithEmailPassword(email,password)
        
        if (!result.ok) return dispatch(logout(result.errorMessage))

        dispatch(login(result))
    }
 }

 export const startLogout = ()=>{
    return async( dispatch ) =>{

        await logoutFirebase();
        dispatch(logout())

    }

 }