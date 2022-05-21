import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Input } from '@rebass/forms'
import { Flex } from 'rebass'

export const SeachBar = () => {
  const router = useRouter()
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    if(search) router.push(`/search/${search}`)
     else router.push(`/`)
    
  }, [search])

  return(
    <>
      <Input  
        placeholder='Buscar' 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        color='white' 
      />
    </>
  )
}