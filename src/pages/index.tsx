import Head from 'next/head'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rey Software Solutions</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, viewport-fit=cover'
        />
      </Head>
      <Header />
    </>
  )
}
