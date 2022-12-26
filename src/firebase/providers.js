import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() =>{
    try {
        
        const result  = await signInWithPopup(FirebaseAuth,googleProvider);
        /* const credentials = GoogleAuthProvider.credentialFromResult(result); */
        const {displayName,email,photoURL,uid} = result.user
        
        return{
            ok:true,
            displayName,email,photoURL,uid
        }
        


    } catch (error) {
        const erroCode = error.code;
        const errorMessage = error.errormessage

        return{
            ok:false,
            errorMessage,
        }
        
    }
}





export const registerUserWithEmailPassword = async ({email,password,displayName,telefono}) =>{
    try {
        
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email,password);
        const{uid, photoURL} =resp.user;
         await  updateProfile(FirebaseAuth.currentUser,{displayName, telefono} ); 
        
        
        return{
            ok:true,
            uid,photoURL,email,displayName,telefono
        }



    } catch (error) {
        
        Swal.fire({
            title: 'Usuario ya existe',
            width: 600,
            padding: '3em',
            color: '#ee9b00',
            background: '#191F3B',
           
          })
          console.log(error)
        return{ok:false, errorMessage:error.message }
    }
}

export const loginWithEmailPassword = async({ email, password }) => {

    try {
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        
        const { uid, photoURL, displayName, telefono } = resp.user;

        return {
            ok: true,
            uid, photoURL, displayName, telefono
        }

    } catch (error) {
        Swal.fire({
            title: 'email o password incorrecto',
            width: 400,
            padding: '3em',
            color: '#ee9b00',
            background: '#191F3B',
           
          })
        return { ok: false, errorMessage: error.message }
    }
}

export const logoutFirebase= async()=>{
    return await FirebaseAuth.signOut();

}