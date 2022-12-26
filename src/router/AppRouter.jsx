import { async } from '@firebase/util';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes,Route, Navigate } from 'react-router-dom'; 
import { FirebaseAuth } from '../firebase/config';
import { UserPage, Home } from '../page';
import { login, logout } from '../store/auth';
import { ChekingAuth } from '../ui/';
import { AuthRouter } from './Authrouter';
import { VisiteRouter } from './VisiteRouter';


export const AppRouter = () => {
  const { status }  = useSelector( state => state.auth)

  const dispatch = useDispatch()

  useEffect(() => {

    onAuthStateChanged(FirebaseAuth, async(user) =>{
      if (!user) return dispatch(logout())

      const { uid, email, displayName, photoURL } = user;

      dispatch(login({ uid, email, displayName, photoURL } ))
    })


  }, []);


  if ( status === 'checking'){
    return <ChekingAuth />
  }

  return (
    <Routes >
    {
      ( status === 'authenticated')
      ?<Route path='/*' element={ <AuthRouter /> } />
      :<Route path='/home/*' element={ <VisiteRouter /> } />
    }
    <Route path='/*' element={ <Navigate to='/home' />} />
    </Routes>

  
    
  )
}
