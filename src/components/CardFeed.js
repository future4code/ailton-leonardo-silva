import React from "react";
import { useEffect } from "react";
import './CardFeedStyles.css'
import { useNavigate , useParams } from "react-router-dom"
import { goToPost } from "../routes/Coordinator";
import UpVote from '../assets/upvote.png'
import DownVote from '../assets/downvote.png'
import Comment from '../assets/comment.png'
export default function CardFeed(props) {

  //Declarando o useNavigate
  const navigate = useNavigate()

  //Buscando o valor do localStorage
  const token = localStorage.getItem('token')

  // Jogando a props para posts 
  const posts = props.post;
  
  //Declarando o useParams
  const pathParams = useParams(posts.id)

  const handleUpVote = () => {
    props.PostVote(props.post.id, 1);
  };

  const handleDownVote = () => {
    props.PostVote(props.post.id, -1);
  };

  useEffect(() => {
        
  }, []);

  return (
    <div className="Wrapper__CardFeed">
        <div>
          <h5 className="H5__CardFeed">Enviado por: {posts.username}</h5>
          <h5 className="H5__CardFeed">Postado em: {posts.createdAt!=null ? new Intl.DateTimeFormat("pt-BR").format(new Date(posts.createdAt)) : ""}</h5>
        </div>
        <h4>{posts.body}</h4>
        <footer className="Footer__CardFeed">
          <div className="Wrapper__Votes__CardFeed">
            <button className="Button__CardFeed" onClick={handleUpVote}><img src={UpVote} alt="icone" /></button>
            <h5 className="H5__CardFeed">{posts.voteSum !== null ? posts.voteSum : "0"}</h5>
            <button className="Button__CardFeed" onClick={handleDownVote}><img src={DownVote} alt="icone" /></button>
          </div>
          <div className="Wrapper__Votes__CardFeed">
            <button className="Button__CardFeed" onClick={() => goToPost(navigate, posts.id)}><img src={Comment} alt="icone" /></button>
            <h5 width="16em" height="16em" className="H5__CardFeed">{posts.commentCount !== null ? posts.commentCount : "0"}</h5>
          </div>
        </footer>
    </div>
  );
}