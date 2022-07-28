import React from 'react'
import './FeedPageStyles.css'
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
import labenu_small from "../../assets/icone_labenu_small.png"


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

    const PostVote = (postId, direction) => {
        const header = {
            headers: {
                Authorization: token
            },
        }    
        const body = {
            direction: direction,
        };
        const url = `${BASE_URL}/posts/${postId}/votes`
        console.log(url)
        axios
        .put(url, body, header)
        .then((response) => {
            console.log(response.data)
            alert("Sucesso! Seu voto foi computado!")
        })
        .catch((error) => {
            console.log(error.response)
        })
    }          
            

    useEffect(() => {
        
    }, []);
    
    return (
        <div className="Container__Feed">
            <header className="Header__Feed">
                <div></div>
                <div>
                    <img src={labenu_small} alt="imagem"/>
                </div>
                <button className="Button__Header__Feed" onClick={() => goToLogin(navigate)}>Logout</button>
            </header>
            <main className="Wrapper__Feed">
            <form onSubmit={onSubmitPost}> 
                <input className="Input__Feed"
                    placeholder="Título do post"
                    name="title"
                    autoComplete="username"
                    autoFocus
                    value={form.title} 
                    onChange={onChange}
                    // pattern={"[a-z][A-Z][0-9]"}
                    // title="Utilize apenas caracteres ou números."
                    required/>
                <input className="Input__Body__Feed"
                    placeholder="Escreva seu post..."
                    name="body"
                    value={form.body} 
                    onChange={onChange}
                    required/>
                
                <button className="Button__Feed">Postar</button>
                
            </form>
            </main>
            <div className="Wrapper__Feed">
                {isLoading && <p>Carregando...</p>}
                {!isLoading && error && <p>Ocorreu um erro!</p>}
                {!isLoading && posts && posts.length > 0 && posts.map((post, id) => {
                    return <CardFeed key={post.id} post={post} PostVote={PostVote}
                    />;
                    })}
                {!isLoading && posts && posts.length === 0 && (<p>Não há itens na lista</p>)}
            </div>
            
        </div>
    )
}
