import axios from "axios";
import { useEffect, useState } from "react";

//Não esquecer de passar o parâmetro url
export const useRequestDataTripPage = (url) => {
  // Declare os useState
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Chamando o Axios
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setIsLoading(false);
        setData(response.data.trips);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [url]);

  // Retorne os dados guardados no estado
  return [data, isLoading, error];
};