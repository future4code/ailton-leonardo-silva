import React from 'react'
import { useEffect } from 'react'
import { useNavigate , useParams } from "react-router-dom"
import { GlobalContext } from "../../components/global/GlobalContext"
import { goToFeedFromPost, goToLogin } from '../../routes/Coordinator'
import { BASE_URL } from '../../constants/Constants'
import { useRequestDataComments } from '../../hooks/useRequestDataComments'
import useForm from '../../hooks/useForm'
import axios from 'axios'
import CardComment from '../../components/CardComment'

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
    <div>
        <header>
          <button onClick={() => goToLogin(navigate)}>Logout / Voltar</button>
        </header>
        <main>
          <form onSubmit={onSubmitComment}> 
            <input
              placeholder="Comentar"
              name="body"
              value={form.body} 
              onChange={onChange}
              required/>
            <div>
              <button>Comentar</button>
            </div>
          </form>
          <div>
            {isLoading && <p>Carregando...</p>}
            {!isLoading && error && <p>Ocorreu um erro!</p>}
            {!isLoading && comments && comments.length > 0 && comments.map((comment, id) => {
            return <CardComment key={comment.id} comment={comment} />;
            })}
            {!isLoading && comments && comments.length === 0 && (<p>Não há comentários nesse post.</p>)}
          </div>
          <button onClick={() => goToFeedFromPost(navigate)}>Voltar para os Feeds</button>
        </main>
    </div>
  )
}

