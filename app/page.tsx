import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <article>
        <section>
          <h2>Transformando hábitos sustentáveis em benefícios compartilhados.</h2>
          <h2>
            <strong>Seja parte da mudança!</strong>
          </h2>
          <p>
            A EcoMind transforma a sustentabilidade em uma aventura com nossos métodos ESG gamificados! Engaje seus colaboradores e contribua para um
            futuro mais sustentável.
          </p>
        </section>
        <section>
          <Image src='/logo.png' alt='ESG Logo' className='h-8 mr-3' width={128} height={23} priority />
        </section>
      </article>
    </main>
  );
}
