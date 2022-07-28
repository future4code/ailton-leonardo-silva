import React from "react";
import { useNavigate , useParams } from "react-router-dom"
import './CardCommentStyles.css'
export default function CardComment(props) {

    //Declarando o useNavigate
    const navigate = useNavigate()

    //Buscando o valor do localStorage
    const token = localStorage.getItem('token')

    // Jogando a props para posts 
    const comments = props.comment;

    //Declarando o useParams
    const pathParams = useParams(comments.id)

  return (
    <div className="Wrapper__CardComment">
        <h3>{comments.body}</h3>
        {/* <h3>Data de criação: {comments.createdAt!=null ? new Intl.DateTimeFormat("pt-BR").format(new Date(posts.createdAt)) : "Teste"}</h3>
        <h3>UserID: {comments.userId}</h3>
        <h3>Usuário: {comments.username}</h3>       
        <h3>Número de Votos: {comments.voteSum}</h3>
        <h3>Número de comentários: {comments.CommentCount}</h3> */}
    </div>
  );
}