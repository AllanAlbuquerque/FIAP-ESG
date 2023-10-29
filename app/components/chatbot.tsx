'use client'

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });


import Image from 'next/image'
import './ChatStyle.css';
import { useEffect, useState } from 'react';



const Chatbot = () => {


    const [loading, setLoading] = useState(false);
    // const [text, setText ] =  useState(null);
    const [data, setData] = useState(null);
    const [tags, setTags] = useState("");

    const [artists, setArtists] = useState<string[]>([]);



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
                setArtists([...artists, ('robot: ' + data.chat)])
            }



        } catch (error) {
            console.log(error)
        } finally {

        }
    }

    const fetchInteraction = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/chatbot_api/chat', {
                method: 'POST',
                headers: new Headers({ 'Content-type': 'application/json' }),
                body: JSON.stringify({
                    name: "fdfdfdfdfdffdf",
                    description: tags
                }),
                mode: 'cors'
            });

            const data = await response.json();

            console.log('data mensagem', data);

            if (!data)
                throw 'Problema na requisição';

            console.log(data.description)
            setArtists([...artists, ('robot: ' + data.description)])







        } catch (error) {
            console.log(error)
        } finally {

        }

    }

    useEffect(() => {
        console.log('data2:', data)
        if (!data) {
            console.log('carai bixo')
            fetchChat();
        }
    }, [])

    function closeChatbot() {
        setLoading(false);
    }

    function abertChatbot() {
        setLoading(true);
    }

    function sendMessageChatbot() {
        setArtists([...artists, ('eu: ' + tags)])
        setTags('');

        fetchInteraction();
    }



    return (
        <>
            <div>
                {
                    loading
                        ? <div className='chatbotabert'>
                            <div className='btnClose'><button onClick={closeChatbot}>X</button> </div>
                            <div className="chatbotContent">
                                {
                                    artists.map( (artist, index) => (
                                        <p key={index}>{artist}</p>
                                    ))
                                }

                            </div>
                            <div className='chatbotFrom'>
                                <input name='tags' id="tags" placeholder='tags(, seperated)' value={tags} onChange={e => setTags(e.target.value)} />
                                <button onClick={sendMessageChatbot}> enviar </button>
                            </div>
                        </div>
                        : <div className='chatbotClose' onClick={abertChatbot}  >
                            <Image src='/home/chat.png' alt='ESG Logo' width={65} height={20} priority />
                        </div>
                }
            </div>
        </>

    )
}


export default Chatbot

