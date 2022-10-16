import React , { useContext } from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../components/global/GlobalContext"
import MegaSenaPage from "../pages/MegaSenaPage/MegaSenaPage";
import { gotoHomePage } from "../routes/Coordinator";
import { gotoMegaSena } from "../routes/Coordinator";
import { gotoQuina } from "../routes/Coordinator";
import { gotoLotofacil } from "../routes/Coordinator";
import { gotoLotomania } from "../routes/Coordinator";
import { gotoTimemania } from "../routes/Coordinator";
import { gotoDiaDeSorte } from "../routes/Coordinator";

export const Seletor = () => {
    const navigate = useNavigate()  
    const {states, setters, requests} = useContext(GlobalContext)
    const {value} = states
    const {setValue} = setters

    

    return (
        <div>
            <select name="loterias" value={value} onChange={(event) => setValue(event.target.value)}>
                    <option value={""}>Escolha um Jogo</option>
                    <option value="mega-sena">Mega-Sena</option>
                    <option value="quina">Quina</option>
                    <option value="lotofácil">Lotofácil</option>
                    <option value="lotomania">Lotomania</option>
                    <option value="timemania">Timemania</option>
                    <option value="dia de sorte">Dia de Sorte</option>
               
                </select>
                    {value === "mega-sena" && <MegaSenaPage/>}
                    {/* {value === "quina" && gotoQuina(navigate)}
                    {value === "lotofácil" && gotoLotofacil(navigate)}
                    {value === "lotomania" && gotoLotomania(navigate)}
                    {value === "timemania" && gotoTimemania(navigate)}
                    {value === "dia de sorte" && gotoDiaDeSorte(navigate)} */}
        </div>

    )
}

