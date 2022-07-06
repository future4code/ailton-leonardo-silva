import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {
	// Declarando o useState
	const [inputValue, setinputValue] = useState("")

	// Controlando o input dos comentarios
	const onChangeComentario = (event) => {
		setinputValue(event.target.value)
	}

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={inputValue}
				onChange={onChangeComentario}
			/>
			{/* Passando os dados via props para a funcao enviarComantario que está no Componente Post */}
			<button onClick={() => { props.enviarComentario(inputValue) }} >Enviar</button>
		</CommentContainer>
	)
}


export default SecaoComentario