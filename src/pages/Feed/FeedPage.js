import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import useForm from '../../hooks/useForm'
import axios from 'axios'
import { GlobalContext } from "../../components/global/GlobalContext"
import { goToLogin } from '../../routes/Coordinator'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/Constants'
import CardFeed from '../../components/CardFeed'

export default function FeedPage(props) {
    //Checagem para saber se está logado ou não.
    useProtectedPage()

    //Declarando o useNavigate
    const navigate = useNavigate()  

    //Declarando o token
    const token = localStorage.getItem("token");
    console.log(token)


    //Chamando o custom Hook para Formularios
    //Substitui as funções de Inputs Controlados
    const { form , onChange , cleanFields } = useForm({title: "" , body: ""}) 

    //Chamando o Hook para os Feeds
    const [posts, isLoading, error] = useRequestData(`${BASE_URL}/posts`);

    // Função de criação de Posts
    const onSubmitPost = (event) => {
        //event.preventDefault()

        const header = {
            headers: {
                Authorization: token
            },
        };
            axios
            .post(`${BASE_URL}/posts`, form , header)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error.response)
            })
        }

    useEffect(() => {
        
    }, []);
    
    return (
        <div>
            <header>
                <button onClick={() => goToLogin(navigate)}>Logout / Voltar</button>
            </header>
            <main>
            <form onSubmit={onSubmitPost}> 
                <h2>NOME</h2>
                <input
                    placeholder="Título do post"
                    name="title"
                    autoComplete="username"
                    autoFocus
                    value={form.title} 
                    onChange={onChange}
                    // pattern={"[a-z][A-Z][0-9]"}
                    title="Utilize apenas caracteres ou números."
                    required/>
                <input
                    placeholder="Escreva seu post..."
                    name="body"
                    value={form.body} 
                    onChange={onChange}
                    required/>
                <div>
                    <button>Postar</button>
                </div>
            </form>
                <div>
                    <h2>Feeds</h2>
                </div>
                <div>
                    {isLoading && <p>Carregando...</p>}
                    {!isLoading && error && <p>Ocorreu um erro!</p>}
                    {!isLoading && posts && posts.length > 0 && posts.map((post, id) => {
                        return <CardFeed key={post.id} post={post} />;
                        })}
                    {!isLoading && posts && posts.length === 0 && (<p>Não há itens na lista</p>)}
                </div>
            </main>
        </div>
    )
}
