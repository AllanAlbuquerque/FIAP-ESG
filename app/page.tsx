'use client';
import { Inter } from 'next/font/google';
import './page.css';
import Image from 'next/image'


const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  const description = {
    Environmental: 'Refere-se a tudo relacionado ao meio ambiente natural e ao impacto das atividades humanas nesse ambiente.',
    Social: 'Refere-se às questões relacionadas às todas práticas sociais e de responsabilidade corporativa das empresas.',
    Governance:
      'Refere-se às práticas de governança corporativa adotadas pelas empresas para garantir a transparência, ética e responsabilidade em suas operações.',
  };

  // function setDescText(event: Event) {
  //   const element = event.target.querySelector('.buttonDescr');
  //   element.innerHTML = description[event.target.id];
  // }

  // function removeDescText(event: Event) {
  //   const element = event.target.querySelector('.buttonDescr');
  //   element.innerHTML = '';
  // }

  return (
    <>
      <main>
        <article className='flex'>
          <section className='w-1/2 ps-8 mt-48'>
            <h2 className='text-4xl'>Transformando hábitos sustentáveis em benefícios compartilhados.</h2>
            <h2 className='text-4xl'>
              <strong>Seja parte da mudança!</strong>
            </h2>
            <p className='mt-8'>
              A EcoMind transforma a sustentabilidade em uma aventura com nossos métodos ESG gamificados! Engaje seus colaboradores e contribua para um
              futuro mais sustentável.
            </p>
          </section>
          <section className='w-1/2'>
            <Image src='/home/tree.svg' alt='Mão segurando uma árvore' />
          </section>
        </article>
        <article className='descript'>
          <h1 className='text-center text-3xl text-white'>
            Uma plataforma dedicada a incentivar posturas focadas no <br /> ESG (Environmental, Social and Governance)!
          </h1>
          <section className='flex items-center'>
            <div className='w-1/2 p-8'>
              <p className='mb-8 text-white'>
                Nós acreditamos que pequenas ações diárias podem fazer uma grande diferença, tanto dentro como fora do ambiente de trabalho, e é por
                isso que queremos encorajar todos a participar dessa mudança positiva.
              </p>
              <p className='mb-8 text-white'>
                Através da nossa plataforma, colaboradores podem adotar boas práticas relacionadas ao meio ambiente, direitos humanos e governança
                corporativa, e serem recompensados por isso!
              </p>
              <div className='descriptButtons flex justify-between'>
                <button id='Environmental'>
                  <div className='tit flex flex-column items-center justify-center'>
                    <div className='flex items-center justify-center font-bold'>
                      <Image src='/home/Sustainability.png' alt={''} />
                      <h4 className='text-white'>Environmental</h4>
                    </div>

                    <p className='buttonDescr'></p>
                  </div>
                </button>
                <button id='Social'>
                  <div className='tit flex items-center justify-center font-bold'>
                    <Image src='/home/Users.png' alt={''} />
                    <h4 className='text-white'>Social</h4>
                    <p className='buttonDescr'></p>
                  </div>
                </button>
                <button id='Governance'>
                  <div className='tit flex items-center justify-center font-bold'>
                    <Image src='/home/Museum.png' alt={''} />
                    <h4 className='text-white'>Governance</h4>
                    <p className='buttonDescr'></p>
                  </div>
                </button>
              </div>
            </div>
            <div className='w-1/2 p-8'>
              <img src='/home/esgVideo.png' alt='Vídeo sobre a importância do ESG' />
            </div>
          </section>
        </article>
        <article className='mt-8'>
          <h1 className='text-center text-4xl font-bold mb-8'>
            PRATIQUE O BEM E <br /> <span className='text-green'>GANHE RECOMPENSAS!</span>
          </h1>
          <div className='flex justify-center'>
            <div className='flex flex-col mx-2 bg-4 rounded-3xl img-config'>
              <img src='/home/progressStones.png' alt='' className='rounded-t-3xl' />
              <div className='text-center p-8'>
                <h2 className='text-black font-bold text-xl mx-8'>
                  DESTAQUE-SE <br /> SENDO O MELHOR!
                </h2>
                <p className='mx-8 mt-2'>Eleve seu nível onde a patente das pedras é a base do seu progresso!</p>
              </div>
            </div>
            <div className='flex flex-col mx-2 bg-4 rounded-3xl img-config'>
              <img src='/home/family.png' alt='' className='rounded-t-3xl' />
              <div className='text-center p-8'>
                <h2 className='text-black font-bold text-xl mx-8'>DESAFIE SEUS AMIGOS</h2>
                <p className='mx-8 mt-2'>Desafie seus amigos e aposte seus Ecocoins para ganhar o dobro!</p>
              </div>
            </div>
            <div className='flex flex-col mx-2 bg-4 rounded-3xl img-config'>
              <img src='/home/loading.png' alt='' className='rounded-t-3xl' />
              <div className='text-center p-8'>
                <h2 className='text-black font-bold text-xl mx-8'>Verifique o progresso</h2>
                <p className='mx-8 mt-2'>Acompanhe seu progresso, o de seus amigos e os melhores do ranking global!</p>
              </div>
            </div>
          </div>
        </article>
        <article className='flex justify-center'>
          <div className='flex flex-col mt-16 items-center justify-center bg-4 w-fit rounded-3xl'>
            <img src='/home/giftBanner.png' alt='' className='rounded-t-3xl' />
            <div className='text-center p-8'>
              <h2 className='text-black font-bold text-xl mx-8'>TROQUE SUAS ATIVIDADES POR RECOMPENSAS!</h2>
              <p className='mx-16 mt-2'>
                Ao adotar posturas focadas no ESG em seu dia a dia, dentro e fora do ambiente de trabalho, você acumula ecocoins <br /> que podem ser
                trocados por uma ampla variedade de recompensas. Desde cartões-presentes até viagens!
              </p>
            </div>
          </div>
        </article>
        <article className='mt-16'>
          <h1 className='text-center text-4xl font-bold mb-8'>
            SUA AJUDA FAZ TODA <span className='text-green'>DIFERENÇA!</span>
          </h1>
          <div className='flex flex-col mt-8 r w-full rounded-3xl'>
            <img src='/home/carr.png' alt='' className='rounded-t-3xl m-auto' />
            <button className='mt-8 mx-auto rounded-full py-2 px-8 text-center text-white bg-black'>Fazer Parte da EcoMind!</button>
          </div>
        </article>
      </main>
      <footer className='footer flex justify-between px-14 py-14' >
        <div>
          <img src='/logofooter.svg' className='pb-10' />
          <span className='text-white copyRight'>copyright © 2023 | Todos os direitos reservados.</span>
        </div>
        <div className='flex justify-between footer-menu'>
          <ul>
            <li className='text-white font-bold'><a href='#'> INSTITUCIONAL </a></li>
            <li className='text-white'><a href='#'> Sobre nós </a></li>
            <li className='text-white'><a href='#'> Trabalhe conosco </a></li>
            <li className='text-white'><a href='#'> Parceiros </a></li>
          </ul>
          <ul>
            <li className='text-white font-bold' ><a href='#'> SUPORTE </a></li>
            <li className='text-white' ><a href='#'> FAQ </a></li>
            <li className='text-white' ><a href='#'> Fale conosco </a></li>
            <li className='text-white' ><a href='#'> Chat </a></li>
          </ul>
          <ul>
            <li className='text-white font-bold' ><a href='#'> Políticas de Privacidade </a></li>
            <li className='text-white' ><a href='#'> Termos de Uso </a> </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Home;
