import axios from "axios";
import { baseURL } from "./baseURL";
import { user } from "./data/types";

//Exercício 3

const getSubscribers = async (): Promise<user[]> => {
  const response = await axios.get(`${baseURL}/subscribers`);
  //Fazendo o map
  return response.data.map((res: any) => {
    console.log (res.id, res.name, res.email)
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
    
  });
};

getSubscribers();
