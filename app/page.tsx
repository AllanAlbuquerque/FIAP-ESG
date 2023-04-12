import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <article className='flex'>
        <section className='w-1/2 ps-8 mt-14'>
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
          <img src="/tree.png" alt="Mão segurando uma árvore" />
        </section>
      </article>
    </main>
  );
}
