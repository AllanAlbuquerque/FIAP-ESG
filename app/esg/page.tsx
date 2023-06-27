import Image from 'next/image'
import { Inter } from 'next/font/google'
import FooterEsg from '../components/footerEsg'


const inter = Inter({ subsets: ['latin'] })

export default function Esg() {
  return (
    <>
      <main className="flex flex-col p-14 mt-8 mb-5">

        <section className='flex justify-between w-full mb-6'>
          <h1 className="text-3xl font-bold">Meu perfil</h1>

          <div className='flex '>
            <button className='shadow-xl bg-gradient-to-r from-emerald-700 to-emerald-500 text-white pr-6 rounded-full flex items-center'> <img className='rounded-full bg-emerald-650 pt-4 pr-4 pb-4 pl-4 mr-1/2' src="/esg/plus.svg" alt="" /> Adicionar atividade </button>
          </div>

        </section>



        <section className='flex w-full h-90'>
          <div className='w-1/4 h-full me-4 rounded-lg'>
            <img className='mt-2' src="/esg/char.svg" alt="" />
          </div>


          <div className='w-2/4 h-full bg-zinc-200 me-4 rounded-lg p-3 shadow-xl'>
            <div className='border-b-2 border-zinc-300'>
              <h1 className='font-bold pb-3 pt-3'> MEUS PONTOS </h1>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <img className='mt-2' src="/esg/coin.svg" alt="" />

                <div className=''>
                  <h1 className='text-emerald-700 text-5xl font-extrabold'>9560</h1>
                  <p className='text-emerald-700 text-2xl ml-8'>ecocoins</p>
                </div>
              </div>

              <button className='mr-3 border-2 border-gray-500 text-gray-500 p-2 rounded-lg font-bold'>Como ganhar mais ecocoins?</button>
            </div>

            <div className='pl-3 pb-3 pr-3'>
              <h1 className='font-extrabold pb-2'>Ganhos recentes</h1>

              <div className='flex justify-between mb-1 bg-zinc-300 p-2 rounded-3xl'>
                <h1>Plantação de árvores</h1>
                <p>+300 pontos</p>
              </div>

              <div className='flex justify-between bg-zinc-300 p-2 rounded-3xl'>
                <h1>Reciclagem de resíduos</h1>
                <p>+70 pontos</p>
              </div>
            </div>

            <div className='text-right mr-4'>
              <button className='text-emerald-500 text-base'>Ver histórico</button>
            </div>
          </div>



          <div className='w-1/4 h-full bg-zinc-200 rounded-lg p-3 shadow-xl'>
            <div className='mt-3 border-b-2 border-zinc-300'>
              <div className='flex justify-around items-center pb-3'>
                <h1 className='font-bold'> MEU NÍVEL </h1>
                <button><a className='text-emerald-500 text-sm' href="">Ver todos os níveis</a></button>
              </div>
            </div>

            <div className='flex flex-col justify-center items-center'>
              <img className='mt-2' src="/esg/ruby.svg" alt="" />

              <h1 className='font-bold'> RUBI DIAMOND </h1>

              <img className='mt-2' src="/esg/bar.svg" alt="" />

              <p className='text-sm text-gray-400 mt-2'> +500 ecocoins para o próximo nível</p>
            </div>
          </div>
        </section>


        <section className='flex w-full mt-16'>

          <div className='w-1/4 me-4 h-fit rounded-lg'>

            <div className='bg-zinc-200 p-3 mb-8 shadow-xl rounded-lg'>
              <div>
                <div className='border-b-2 border-zinc-300 pb-3 pt-3'>
                  <h1 className='font-bold'>AMIGOS</h1>
                </div>

                <div className='p-2'>
                  <div className='flex items-center justify-around mb-2'>
                    <img src="/esg/jose.svg" alt="" />
                    <div>
                      <h1 className='font-bold'>José Antônio</h1>
                      <p className='text-zinc-400'>Visto por último há 5h atrás</p>
                    </div>
                    <img className='cursor-pointer' src="/esg/accuracy.svg" alt="" />
                  </div>

                  <div className='flex items-center justify-around mb-2'>
                    <img src="/esg/carlos.svg" alt="" />
                    <div>
                      <h1 className='font-bold'>Carlos Presch</h1>
                      <p className='text-zinc-400'>Visto por último há 5m atrás</p>
                    </div>
                    <img className='cursor-pointer' src="/esg/accuracy.svg" alt="" />
                  </div>

                  <div className='flex items-center justify-around mb-2'>
                    <img src="/esg/marcela.svg" alt="" />
                    <div>
                      <h1 className='font-bold'>Marcela Gomes</h1>
                      <p className='text-zinc-400'>Visto por último há 9h atrás</p>
                    </div>
                    <img className='cursor-pointer' src="/esg/accuracy.svg" alt="" />
                  </div>

                  <div className='flex items-center justify-around mb-2'>
                    <img src="/esg/gabriel.svg" alt="" />
                    <div>
                      <h1 className='font-bold'>Gabriel Romã</h1>
                      <p className='text-zinc-400'>Visto por último há 3h atrás</p>
                    </div>
                    <img className='cursor-pointer' src="/esg/accuracy.svg" alt="" />
                  </div>

                  <div className='text-end '>
                    <button className='text-emerald-700'> Ver mais </button>
                  </div>

                </div>
              </div>
            </div>

            <div className='bg-zinc-200 p-3 shadow-lg rounded-xl'>
              <div className='border-b-2 border-zinc-300 pb-3 pt-3'>
                <h1 className='font-bold'>DESAFIOS</h1>
              </div>

              <div className='flex pt-3 justify-center mb-2'>
                <img src="/esg/gabriel-mini.svg" alt="" />
                <h1> Gabriel te desafiou!</h1>
              </div>

              <div className='flex flex-col justify-center items-center'>
                <p>Tarefa: Maior reciclagem!</p>
                <p> <b>Prêmio:</b> 700 ecocoins</p>
              </div>

              <div className='flex justify-evenly mt-3'>
                <div className='flex items-center flex-col'>
                  <button><img src="/esg/check.svg" alt="" /></button>
                  <h1>Aceitar</h1>
                </div>

                <div className='flex items-center flex-col'>
                  <button><img src="/esg/exit.svg" alt="" /></button>
                  <h1>Recusar</h1>
                </div>

              </div>
            </div>
          </div>




          <div className='bg-zinc-200 w-2/4 me-4 p-3 h-fit rounded-lg shadow-xl'>
            <div className='border-b-2 border-zinc-300 pb-3 pt-3'>
              <h1 className='font-bold'>TROCAR ECOCOINS POR BENEFÍCIOS</h1>
            </div>

            <div className='pt-3 pb-3'>
              <h1 className='font-bold'> Categorias </h1>
            </div>

            <div className='flex justify-evenly'>
              <img className='rounded-xl' src="/esg/gift.png" alt="" />

              <img className='rounded-xl' src="/esg/perso.png" alt="" />

              <img className='rounded-xl' src="/esg/treathe.png" alt="" />
            </div>

            <div className='flex justify-evenly mt-4'>
              <img className='rounded-xl' src="/esg/airplane.png" alt="" />

              <img className='rounded-xl' src="/esg/car-dashboard.png" alt="" />

              <img className='rounded-xl' src="/esg/products.png" alt="" />
            </div>

            <div className='w-full mt-4 pb-3'>
              <img className='rounded-xl w-full' src="/esg/next.png" alt="" />
            </div>
          </div>


          <div className='bg-zinc-200 w-1/4 me-4 p-3 h-fit rounded-lg shadow-xl'>
            <div className='border-b-2 border-zinc-300 pb-3 pt-3'>
              <h1 className='font-bold'>RANKING</h1>
            </div>

            <div className='flex items-center justify-between mb-2'>
              <img src="/esg/marcos.png" alt="" />

              <div className='flex flex-col justify-center items-center'>
                <h1 className='font-bold'>Marcos Andrade</h1>
                <p className='text-zinc-400 text-sm'>Visto há 2h atrás</p>
              </div>

              <div className='flex flex-col justify-center items-center mr-2'>
                <h1 className='text-lg font-bold text-zinc-500'>16.240</h1>
                <p className='text-zinc-500'>ecocoins</p>
              </div>
            </div>


            <div className='flex items-center justify-between mb-2'>
              <img src="/esg/gabrielaf.png" alt="" />

              <div className='flex flex-col justify-center items-center'>
                <h1 className='font-bold'>Gabriela Fagundes</h1>
                <p className='text-zinc-400 text-sm'>Visto há 30m atrás</p>
              </div>

              <div className='flex flex-col justify-center items-center mr-2'>
                <h1 className='text-lg font-bold text-zinc-500'>15.720</h1>
                <p className='text-zinc-500'>ecocoins</p>
              </div>
            </div>


            <div className='flex items-center justify-between mb-2'>
              <img src="/esg/vinicius.png" alt="" />

              <div className='flex flex-col justify-center items-center'>
                <h1 className='font-bold'>Vinicius Freitas</h1>
                <p className='text-zinc-400 text-sm'>Visto há 1h atrás</p>
              </div>

              <div className='flex flex-col justify-center items-center mr-2'>
                <h1 className='text-lg font-bold text-zinc-500'>15.000</h1>
                <p className='text-zinc-500'>ecocoins</p>
              </div>
            </div>


            <div className='flex items-center justify-between mb-2'>
              <img src="/esg/jose.svg" alt="" />

              <div className='flex flex-col justify-center items-center'>
                <h1 className='font-bold'>José Antônio</h1>
                <p className='text-zinc-400 text-sm'>Visto há 5h atrás</p>
              </div>

              <div className='flex flex-col justify-center items-center mr-2'>
                <h1 className='text-lg font-bold text-zinc-500'>14.698</h1>
                <p className='text-zinc-500'>ecocoins</p>
              </div>
            </div>


            <div className='flex items-center justify-between mb-2'>
              <img src="/esg/carlos.svg" alt="" />

              <div className='flex flex-col justify-center items-center'>
                <h1 className='font-bold'>Carlos Presch</h1>
                <p className='text-zinc-400 text-sm'>Visto há 5m atrás</p>
              </div>

              <div className='flex flex-col justify-center items-center mr-2'>
                <h1 className='text-lg font-bold text-zinc-500'>16.240</h1>
                <p className='text-zinc-500'>ecocoins</p>
              </div>
            </div>


            <div className='flex items-center justify-between mb-2'>
              <img src="/esg/marcela.svg" alt="" />

              <div className='flex flex-col justify-center items-center'>
                <h1 className='font-bold'>Marcela Gomes</h1>
                <p className='text-zinc-400 text-sm'>Visto há 9h atrás</p>
              </div>

              <div className='flex flex-col justify-center items-center mr-2'>
                <h1 className='text-lg font-bold text-zinc-500'>12.122</h1>
                <p className='text-zinc-500'>ecocoins</p>
              </div>
            </div>


            <div className='flex items-center justify-between mb-2'>
              <img src="/esg/gabriela.png" alt="" />

              <div className='flex flex-col justify-center items-center'>
                <h1 className='font-bold'>Gabriela Lopes</h1>
                <p className='text-zinc-400 text-sm'>Visto há 1d atrás</p>
              </div>

              <div className='flex flex-col justify-center items-center mr-2'>
                <h1 className='text-lg font-bold text-zinc-500'>10.927</h1>
                <p className='text-zinc-500'>ecocoins</p>
              </div>
            </div>


            <div className='text-end mt-3 mb-2'>
              <button className='text-emerald-700'> Ver mais </button>
            </div>

          </div>


        </section>



      </main>
      <FooterEsg />
    </>
  )
}
