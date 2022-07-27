import axios from "axios";
import { useEffect, useState } from "react";

//Não esquecer de passar o parâmetro url
export const useRequestData = (url) => {
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

  // Chamando o Axios
  useEffect(() => {
    setIsLoading(true);
    
    const header = {
      headers: {
          Authorization: token
      },
    };
      axios
      .post(`${BASE_URL}/posts`, form , header)
      .then((response) => {
        setIsLoading(false);
        console.log(response.data)
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error.response)
      })

  }, [url]);

  // Retorne os dados guardados no estado
  return [data, isLoading, error];
};