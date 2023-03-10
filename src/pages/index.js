import DashboardComponent from '@/components/dashboardComponent'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardComponent>
        <div>
          <h2 className=" text-5xl">Hola</h2>
          <h2 className=" text-5xl">Soy Gabriel,</h2>
          <h2 className=" text-5xl mb-6">Backend Developer</h2>
          <button className=' w-auto p-3 border-2 border-solid border-purple-900 hover:bg-purple-900'>Contactame</button>
        </div>
      </DashboardComponent>
    </>
  )
}
