
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import './style.css';

export default function FooterEsg() {
    return (
        <footer className='flex justify-between items-center px-14'>
            <span className='name' >ecomind</span>
            <div>
                <span className='politica me-5'>Políticas de Privacidade</span>
                <span className='termos'>Termos e Condições</span>
            </div>
        </footer>

    )
}