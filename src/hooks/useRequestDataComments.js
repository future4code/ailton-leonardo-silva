import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Não esquecer de passar o parâmetro url
export const useRequestDataComments = (url) => {
  // Declare os useState
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");
  
  const header = {
    headers: {
      Authorization: token
    },
  };

  console.log(url)
  // Chamando o Axios
  useEffect(() => {
    setIsLoading(true);
    
    axios
      .get(url , header)
      .then((response) => {
        setIsLoading(false);
        setData(response.data);
        console.log("Entrou na request do axios")
      
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });

  }, [url]);

  // Retorne os dados guardados no estado
  return [data, isLoading, error];
};