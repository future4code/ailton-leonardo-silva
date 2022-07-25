import React from 'react'
import { ButtonPaginas, ContainerInicial, Header , InputNome, Wrapper , H3 } from './EstiloPaginas'
import { useState } from 'react';

export default function TelaInicial(props) {
  // Declarando o useState
  const [name, setname] = useState("");

  // Limpando o localStorage
  localStorage.clear();  
  // Guardando o valor do Input Controlado no localStorage
  localStorage.setItem("user", name);

  // Input Controlado
  const onChangeName = (event) => {
    setname(event.target.value);
  };

    return (
        <ContainerInicial>
            <Header>
                <h2>Projeto AstroMatch</h2>
            </Header>
            <div>
                <br/>
                <Wrapper>
                    <H3>Digite o seu nome:</H3>
                    <InputNome placeholder="Nome" value={name} onChange={onChangeName} />
                    <br/>
                    <ButtonPaginas onClick={props.goToMatches}>Entrar</ButtonPaginas>
                    <br/>
                    <ButtonPaginas onClick={props.goToLista}>Tela das Listas</ButtonPaginas>
                </Wrapper>
            </div>
        </ContainerInicial>
    )
}