import DashboardComponent from '@/components/dashboardComponent'
import Head from 'next/head'
import Image from 'next/image'

export default function Trabajo() {


    function mostarInfoProyecto(){
        alert("hola")
    }



    return (
        <>
            <Head>
                <title>Gabriel Valera | Porfolio</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DashboardComponent>
                {/* <div className='max-w-full min-w-full flex flex-wrap flex-row'> */}
                <div className='max-w-full min-w-full  container '>
                    <div className=' grid grid-cols-1 ms:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

                        <div className='contenedor-carta-proyecto h-80 overflow-hidden relative'>
                            <div className='contenedor-boton-carta-proyecto w-full h-full absolute z-10 top-0 left-0 flex flex-row justify-center items-center'>
                                <button className='h-15 w-auto p-3 border-2 border-solid bg-purple-900 border-purple-900 hover:border-purple-600 hover:bg-purple-600 text-white' onClick={mostarInfoProyecto}>Ver Proyecto</button>
                            </div>
                            <Image className='h-80 w-full' src="/images/image2.png" alt='codigo javascript' width={500} height={500} />
                        </div>



                        <div className='contenedor-carta-proyecto h-80 overflow-hidden relative'>
                            <div className='contenedor-boton-carta-proyecto w-full h-full absolute z-10 top-0 left-0 flex flex-row justify-center items-center'>
                                <button className='h-15 w-auto p-3 border-2 border-solid bg-purple-900 border-purple-900 hover:border-purple-600 hover:bg-purple-600  text-white'>Ver Proyecto</button>
                            </div>
                            <Image className='h-80 w-full' src="/images/image2.png" alt='codigo javascript' width={500} height={500} />
                        </div>
                        <div className='contenedor-carta-proyecto h-80 overflow-hidden relative'>
                            <div className='contenedor-boton-carta-proyecto w-full h-full absolute z-10 top-0 left-0 flex flex-row justify-center items-center'>
                                <button className='h-15 w-auto p-3 border-2 border-solid bg-purple-900 border-purple-900 hover:border-purple-600 hover:bg-purple-600  text-white'>Ver Proyecto</button>
                            </div>
                            <Image className='h-80 w-full' src="/images/image2.png" alt='codigo javascript' width={500} height={500} />
                        </div>
                        <div className='contenedor-carta-proyecto h-80 overflow-hidden relative'>
                            <div className='contenedor-boton-carta-proyecto w-full h-full absolute z-10 top-0 left-0 flex flex-row justify-center items-center'>
                                <button className='h-15 w-auto p-3 border-2 border-solid bg-purple-900 border-purple-900 hover:border-purple-600 hover:bg-purple-600  text-white'>Ver Proyecto</button>
                            </div>
                            <Image className='h-80 w-full' src="/images/image2.png" alt='codigo javascript' width={500} height={500} />
                        </div>
                        <div className='contenedor-carta-proyecto h-80 overflow-hidden relative'>
                            <div className='contenedor-boton-carta-proyecto w-full h-full absolute z-10 top-0 left-0 flex flex-row justify-center items-center'>
                                <button className='h-15 w-auto p-3 border-2 border-solid bg-purple-900 border-purple-900 hover:border-purple-600 hover:bg-purple-600  text-white'>Ver Proyecto</button>
                            </div>
                            <Image className='h-80 w-full' src="/images/image2.png" alt='codigo javascript' width={500} height={500} />
                        </div>
                        <div className='contenedor-carta-proyecto h-80 overflow-hidden relative'>
                            <div className='contenedor-boton-carta-proyecto w-full h-full absolute z-10 top-0 left-0 flex flex-row justify-center items-center'>
                                <button className='h-15 w-auto p-3 border-2 border-solid bg-purple-900 border-purple-900 hover:border-purple-600 hover:bg-purple-600  text-white'>Ver Proyecto</button>
                            </div>
                            <Image className='h-80 w-full' src="/images/image2.png" alt='codigo javascript' width={500} height={500} />
                        </div>
                        <div className='contenedor-carta-proyecto h-80 overflow-hidden relative'>
                            <div className='contenedor-boton-carta-proyecto w-full h-full absolute z-10 top-0 left-0 flex flex-row justify-center items-center'>
                                <button className='h-15 w-auto p-3 border-2 border-solid bg-purple-900 border-purple-900 hover:border-purple-600 hover:bg-purple-600  text-white'>Ver Proyecto</button>
                            </div>
                            <Image className='h-80 w-full' src="/images/image2.png" alt='codigo javascript' width={500} height={500} />
                        </div>
                        <div className='contenedor-carta-proyecto h-80 overflow-hidden relative'>
                            <div className='contenedor-boton-carta-proyecto w-full h-full absolute z-10 top-0 left-0 flex flex-row justify-center items-center'>
                                <button className='h-15 w-auto p-3 border-2 border-solid bg-purple-900 border-purple-900 hover:border-purple-600 hover:bg-purple-600  text-white'>Ver Proyecto</button>
                            </div>
                            <Image className='h-80 w-full' src="/images/image2.png" alt='codigo javascript' width={500} height={500} />
                        </div>
                        <div className='contenedor-carta-proyecto h-80 overflow-hidden relative'>
                            <div className='contenedor-boton-carta-proyecto w-full h-full absolute z-10 top-0 left-0 flex flex-row justify-center items-center'>
                                <button className='h-15 w-auto p-3 border-2 border-solid bg-purple-900 border-purple-900 hover:border-purple-600 hover:bg-purple-600  text-white'>Ver Proyecto</button>
                            </div>
                            <Image className='h-80 w-full' src="/images/image2.png" alt='codigo javascript' width={500} height={500} />
                        </div>

                    </div>

                </div>
            </DashboardComponent>
        </>
    )
}