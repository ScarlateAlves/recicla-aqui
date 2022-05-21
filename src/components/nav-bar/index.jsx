import React from 'react'
import { Heading, Flex } from 'rebass'
import { NavLink } from './nav-link'
import { SeachBar } from './seach-bar'
import { NavBarContainer } from './styles'


export const NavBar = () => {
  return(
    <NavBarContainer>
      <Flex style={{ gap: '2rem'}} alignItems='center'>
        <Heading fontSize='1.5rem' fontFamily= '"Monoton", cursive' color='#F10086'>SCARFLIX</Heading>
        <NavLink />
      </Flex>
      <Flex style={{ gap: '1rem'}} >
      <SeachBar />
      </Flex>
    </NavBarContainer>
  )
}