import React from 'react';
import './App.css';
// import styled from 'styled-componentes';

import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemLeo from './img/leo.jpg';
import ImagemBotao from './img/setapreta.png'
import ImagemEmail from './img/emailpreto.png'
import ImagemEndereco from './img/endpreto.png'
import ImagemVarig from './img/varig.png'
import ImagemLatam from './img/latam.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImagemLeo}
          nome="Leonardo" 
          descricao="Oi, eu sou o Leonardo. Sou aluno da Labenu. Estou estudando Full Stack, para iniciar uma carreira nova."
        />
        
        <ImagemButton 
          imagem={ImagemBotao} 
          texto="Ver mais"
        />
      </div>

      {/* EMAIL */}
      <div className="page-section-container">
        <CardPequeno 
          imagem={ImagemEmail}
          nome="EMAIL"
          descricao="leonardosimasrodrigues@gmail.com"
        />
      </div>
      {/* ENDEREÇO */}
      <div className="page-section-container">
        <CardPequeno 
          imagem={ImagemEndereco}
          nome="Endereço"
          descricao="Rua Medina 180, ap 301 - Méier - Rio de Janeiro - CEP 20735-130"
        />
      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={ImagemLatam}
          nome="Latam" 
          descricao="Trabalhei como comissario de voo de 2006 até 2022, onde aprendi a trabalhar sobre presão, gerenciar situações adversas e de risco. Sempre com elegância."
        />
        <CardGrande 
          imagem={ImagemVarig} 
          nome="Varig" 
          descricao="Trabalhei como líder de vendas, entre 2001 e 2006. Participei no processo de desenvolvimento dos primeiros bilhetes eletrônicos e em fraudes de cartões de crédito."  
        />
        
        
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <a href='https://www.facebook.com/leonardosimas' target='_blank'>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />
        </a>        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
