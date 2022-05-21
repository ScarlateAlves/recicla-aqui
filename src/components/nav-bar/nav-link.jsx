import Link from 'next/link'
import React from 'react'
import { Flex } from 'rebass'

export const NavLink = () => {
  return(
    <>
      <Flex style={{ gap: '1rem'}}>
        <Link href='/'>Início</Link>
        <Link href='/tv'>Tv</Link>
        <Link href='/move'>Filmes</Link>
        <Link href='/'>Bombando</Link>
        <Link href='/'>Favoritos</Link>
      </Flex>
    </>
  )
}