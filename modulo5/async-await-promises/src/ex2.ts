import axios from "axios";
import { baseURL } from "./baseURL";

//Exercício 1

const getSubscribers = async (): Promise<any[]> => {
  const response = await axios.get(`${baseURL}/subscribers`);
  console.log(response.data);
  return response.data;
};

getSubscribers();
