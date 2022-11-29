import * as React from "react";
import axios from "axios";
import { useState, useEffect } from "react"


export const useRequestData = (initialState, url) => {
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get(url)
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [url]);

  return [data, loading];
};
