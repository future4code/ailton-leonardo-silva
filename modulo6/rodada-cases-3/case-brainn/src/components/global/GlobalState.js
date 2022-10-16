import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { BASE_URL } from "../../constants/urls";
import { useRequestData } from "../../hooks/useRequestData";


const GlobalState = (props) => {
  const [loterias, setLoterias] = useState();
  const [concursos, setConcursos] = useState([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState();

  // useEffect (() => {
  // async function TiposDeLoterias() {
  //   try {
  //     const [loteria] = await getLoterias(`${BASE_URL}/loterias`);
  //     console.log("loteria",loteria)

  //     // if (loteria.status === 200 && loteria.length > 0) {
  //     //   setLoterias(loteria);
  //     // }

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // TiposDeLoterias()

  // }, [])

  // useEffect (() => {
  // async function Concursos() {
  //   try {
  //     const [loteriaConcurso] = await getLoteriasConcursos(`${BASE_URL}/loterias-concursos`);
  //     console.log("loteriaconcurso",loteriaConcurso)
  //     // if (loteriasConcursos.status === 200 &&loteriasConcursos.data.length > 0) {
  //     //   setLoteriasConcursos(loteriaConcurso);
  //     // }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // Concursos();
  // }, [])

  // console.log("loterias", loterias);
  // console.log("Concursos", loteriasConcursos);

  const states = { loterias, value };
  const setters = { setLoterias, setValue };
  const requests = {};

  const Provider = GlobalContext.Provider;

  return (
    <Provider value={{ states, setters, requests }}>{props.children}</Provider>
  );
};

export default GlobalState;
