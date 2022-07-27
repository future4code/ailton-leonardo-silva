import React from "react";
import { useNavigate , useParams } from "react-router-dom"
import { goToPost } from "../routes/Coordinator";

export default function CardFeed(props) {

    //Declarando o useNavigate
    const navigate = useNavigate()

    //Buscando o valor do localStorage
    const token = localStorage.getItem('token')

    // Jogando a props para posts 
    const posts = props.post;

    //Declarando o useParams
    const pathParams = useParams(posts.id)

  return (
    <div>
      <div>
        <h3>ID: {posts.id}</h3>
        <h3>Título: {posts?.title}</h3>
        <h3>Body: {posts.body}</h3>
        <h3>Data de criação: {posts.createdAt!=null ? new Intl.DateTimeFormat("pt-BR").format(new Date(posts.createdAt)) : "Teste"}</h3>
        <h3>UserID: {posts.userId}</h3>
        <h3>Usuário: {posts.username}</h3>       
        <h3>Número de Votos: {posts.voteSum}</h3>
        <h3>Número de comentários: {posts.commentCount}</h3>
        <button onClick={() => goToPost(navigate, posts.id)}>Comentários</button>
        ---------------------------------
        

      </div>
    </div>
  );
}