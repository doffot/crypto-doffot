import React from 'react'
import { Contenido, Monedas, Navbar } from './component'
import { LoginPage } from './LoginPage'

export const Home = () => {
  return (
    <>
      <Navbar />
      <LoginPage />
      <Contenido />
      <Monedas />
    </>
  )
}
