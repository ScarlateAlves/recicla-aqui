import { Input } from '@rebass/forms'
import { Button, Flex, Heading} from 'rebass'
export default function Login() {
  return (
    <Flex 
      flexDirection='column' 
      style={{ gap: '1rem'}}
      justifyContent='center'
      alignItems='center'
      height='100vh'
      width='100vw'
      >
       <Heading>Login</Heading>
        <Flex width='20%' flexDirection='column' style={{ gap: '1rem'}}>
        <Input placeholder='Email' />
        <Input placeholder='Senha' />
        <Button color='black' style={{ cursor: 'pointer' }} >CONFIRMAR</Button>
        </Flex>
    </Flex>
  )
}
