
import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const getLoterias = async(setLoterias) =>{
    await axios.get(`${BASE_URL}/loterias`)
    .then((res)=>{
        setLoterias(res.data)
    })
    .catch((err)=>{
        console.log(err.response)
    })
}

export const getLoteriasConcursos = async(setLoteriasConcursos) =>{
    await axios.get(`${BASE_URL}/loterias-concursos`)
    .then((res)=>{
        setLoteriasConcursos(res.data)
    })
    .catch((err)=>{
        console.log(err.response)
    })
}

export const getConcursos = async(setConcursos, idConcurso) =>{
    await axios.get(`${BASE_URL}/concursos/${idConcurso}`)
    .then((res)=>{
        setConcursos(res.data)
    })
    .catch((err)=>{
        console.log(err.response)
    })
}