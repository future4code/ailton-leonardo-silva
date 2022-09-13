import axios from "axios";
import { baseURL } from "./baseURL";

//Exercício 2 - Função nomeada assíncrona com arrow function

const getSubscribers = async (): Promise<any[]> => {
  const res = await axios.get(`${baseURL}/subscribers`);
  console.log(res.data);
  return res.data;
};

getSubscribers();
