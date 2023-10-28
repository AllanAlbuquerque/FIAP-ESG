'use client'

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });


import './ChatStyle.css';
import { useEffect, useState } from 'react';



const Chatbot = () => {

    const [loading, setLoading] = useState(false);
    const [data , setData] = useState(null);


    const fetchChat = async () => {

        try {
            const response = await fetch('http://127.0.0.1:8000/chatbot_api/init', {
                method: 'GET',
                headers: new Headers({ 'Content-type': 'application/json' }),
                mode: 'cors'
            });
            const data = await response.json();
            console.log('loanding:', loading)

            if (!data)
                throw 'Problema na requisição';

       
            if (data) {
                setLoading(true)
                console.log(data.chat)
                setData(data.chat);
            }



        } catch (error) {
            console.log(error)
        } finally {
        
        }
    }



    useEffect(() => {
        console.log('carai bixo')
        fetchChat();
    }, [])

    console.log('data:', data)


    return (
        <>
            <div>
                {
                    loading
                        ? <div className='chatbotabert'>  {data} </div>
                        : <div className='chatbotClose'  ></div>
                }
            </div>
        </>

    )
}


export default Chatbot