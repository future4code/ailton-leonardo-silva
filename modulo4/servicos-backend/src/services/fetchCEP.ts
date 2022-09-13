import axios from "axios"

//Fazendo uma busca externa para pegar o CEP residencial.
//Na requisição já passamos todos os dados da API.

const fetchCEP = async (CEP: string) => {
    try {
        const result = await axios.get(`https://viacep.com.br/ws/${CEP}/json/`);
        return result.data
    } catch (error: any) {
        return null
    }
}

export default fetchCEP;