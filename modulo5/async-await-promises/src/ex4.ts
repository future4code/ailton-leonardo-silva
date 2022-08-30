import axios from "axios";
import { baseURL } from "./baseURL";
import { user , news } from "./data/types";

//Exercício 4 - A API cria usuários e news somente com o endpoint PUT
// O endpoint POST só é usado para notificação.

const news = {
    title: "19 anos da tragédia de Alcântara",
    content: "21 cientistas, engenheiros, mecanicos e cinegrafistas, morreram a 3 dias do lançamento do VLS-1. A explosão ocorreu dentro do próprio galpão.",
    date: Date.now(),
  };


const createNews = async (title:string, content:string, date:number): Promise<any> => {
  try {
    await axios.put(`${baseURL}/news`, {
      title,
      content,
      date
    });    
  } catch (error) {
    console.log("Entrou no erro.")    
  }
  
};

createNews(news.title, news.content, news.date);
