import React from "react";
import { useNavigate , useParams } from "react-router-dom"
import './CardCommentStyles.css'
import UpVote from '../assets/upvote.png'
import DownVote from '../assets/downvote.png'
import Comment from '../assets/comment.png'

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
        <div>
          <h5 className="H5__CardComment">Postado por: {comments.username}</h5>
          <h5 className="H5__CardComment">Comentado em: {comments.createdAt!=null ? new Intl.DateTimeFormat("pt-BR").format(new Date(comments.createdAt)) : ""}</h5>
        </div>
        <h3>{comments.body}</h3>
        <footer className="Footer_CardComment">
          <div className="Wrapper__Votes__CardComment">
              <button className="Button__CardComment"><img src={UpVote} alt="icone" /></button>
              <h5 className="H5__CardFeed">{comments.voteSum !== null ? comments.voteSum : "0"}</h5>
              <button className="Button__CardComment"><img src={DownVote} alt="icone"/></button>
          </div>
        </footer>
    </div>
  );
}