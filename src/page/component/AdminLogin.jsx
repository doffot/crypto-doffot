import React from 'react'
import { LoginModal } from '../../components'
import { useModal } from '../../hooks'
import { Dashboard } from '../dashboard'

export const AdminLogin = () => {

    const { openDateModal } = useModal()
const onclick = () =>{

    openDateModal()
}
  return (
    <>
        <LoginModal />
        <button  onClick={onclick}>admin</button>
        <Dashboard />
    </>
  )
}
