import React from "react";
import './CardFeedStyles.css'
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
    <div className="Wrapper__CardFeed">
        <h3>Enviado por: {posts.username}</h3>
        <h3>{posts.body}</h3>
        <h3>Postado em: {posts.createdAt!=null ? new Intl.DateTimeFormat("pt-BR").format(new Date(posts.createdAt)) : "Teste"}</h3>
        <h3>Votos: {posts.voteSum !== null ? posts.voteSum : "0"}</h3>
        <h3>Comentários: {posts.commentCount !== null ? posts.commentCount : "0"}</h3>
        <button onClick={() => goToPost(navigate, posts.id)}>Comentários</button>
    </div>
  );
}