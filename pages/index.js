import Image from 'next/image'
import { Layout } from '../src/components/layout'


export default function Home() {
  return (
    <Layout>
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
    </Layout>
  )
}
