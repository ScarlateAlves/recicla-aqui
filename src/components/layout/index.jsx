import React from 'react'
import { NavBar } from '../nav-bar/index'
import { LayoutStyles } from './styles'


export const Layout = ({ children }) => {
  return(
    <>
    <NavBar />
     <LayoutStyles>
     { children }
     </LayoutStyles>
    </>
  )
}