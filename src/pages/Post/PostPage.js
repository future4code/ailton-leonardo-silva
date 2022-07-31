import React from 'react'
import './PostPageStyles.css'
import { useEffect } from 'react'
import { useNavigate , useParams } from "react-router-dom"
import { GlobalContext } from "../../components/global/GlobalContext"
import { goToFeedFromPost, goToLogin } from '../../routes/Coordinator'
import { BASE_URL } from '../../constants/Constants'
import { useRequestDataComments } from '../../hooks/useRequestDataComments'
import useForm from '../../hooks/useForm'
import axios from 'axios'
import CardComment from '../../components/CardComment'
import labenu_small from "../../assets/icone_labenu_small.png"
import x from "../../assets/x.png"


export default function PostPage() {
  //Declarando o useNavigate
  const navigate = useNavigate()  

  //Buscando o valor do localStorage
  const token = localStorage.getItem('token')

  //Chamando o custom Hook para Formularios
  //Substitui as funções de Inputs Controlados
  const { form , onChange , cleanFields } = useForm({body: ""}) 

  //Declarando o useParams
  const pathParams = useParams()
  console.log(pathParams)

  //Chamando o Hook para os Feeds
  const [comments, isLoading, error] = useRequestDataComments(`${BASE_URL}/posts/${pathParams.id}/comments`);

  // Função de criação de Comentário
  const onSubmitComment = (event) => {
  // event.preventDefault()

    const header = {
        headers: {
            Authorization: token
        },
    };
        axios
        .post(`${BASE_URL}/posts/${pathParams.id}/comments`, form , header)
        .then((response) => {
          alert("Comentário postado com sucesso!")
        })
        .catch((error) => {
          console.log(error.message)
        })
    }

  useEffect(() => {
    
  }, []);

  return (
    <div className="Container__Post">
        <header className="Header__Post">
          <div>
            <button className="Button__Header__Post" onClick={() => goToFeedFromPost(navigate)}><img src={x} alt="imagem"/></button>
          </div>
          <div>
            <img src={labenu_small} alt="imagem"/>
          </div>
          <button className="Button__Header__Post" onClick={() => goToLogin(navigate)}>Logout</button>
        </header>
        <main>
          <div className="Wrapper__Post">
            <h4>Espaço para o post que estamos comentando</h4>
          </div>
          <form className="Wrapper__Post" onSubmit={onSubmitComment}> 
            <input className="Input__Body__Post"
              placeholder="Adicionar comentário"
              name="body"
              value={form.body} 
              onChange={onChange}
              required/>
            <div>
              <button className="Button__Post">Responder</button>
            </div>
          </form>
          <div className="Wrapper__Post">
            {isLoading && <p>Carregando...</p>}
            {!isLoading && error && <p>Ocorreu um erro!</p>}
            {!isLoading && comments && comments.length > 0 && comments.map((comment, id) => {
            return <CardComment key={comment.id} comment={comment} />;
            })}
            {!isLoading && comments && comments.length === 0 && (<p>Não há comentários nesse post.</p>)}
          </div>
        </main>
    </div>
  )
}

