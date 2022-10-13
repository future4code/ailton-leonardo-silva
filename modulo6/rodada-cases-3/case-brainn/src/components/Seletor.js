import React , { useContext } from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../components/global/GlobalContext"
import { gotoHomePage } from "../routes/Coordinator";
import { gotoMegaSena } from "../routes/Coordinator";
import { gotoQuina } from "../routes/Coordinator";
import { gotoLotofacil } from "../routes/Coordinator";
import { gotoLotomania } from "../routes/Coordinator";
import { gotoTimemania } from "../routes/Coordinator";
import { gotoDiaDeSorte } from "../routes/Coordinator";

export const Seletor = () => {
    const navigate = useNavigate()  
    const [value, setValue] = useState()

    return (
        <div>
            <select name="loterias" value={value} onChange={(event) => setValue(event.target.value)}>
                    <option value={""}>Escolha um Jogo</option>
                    <option onChange={() => gotoMegaSena(navigate)} value="Mega-Sena">Mega-Sena</option>
                    <option onChange={() => gotoQuina(navigate)} value="Quina">Quina</option>
                    <option onChange={() => gotoLotofacil(navigate)} value="Lotofácil">Lotofácil</option>
                    <option onChange={() => gotoLotomania(navigate)} value="Lotomania">Lotomania</option>
                    <option onChange={() => gotoTimemania(navigate)} value="Timemania">Timemania</option>
                    <option onChange={() => gotoDiaDeSorte(navigate)} value="Dia de Sorte">Dia de Sorte</option>
                </select>
                    {value === "" && gotoHomePage(navigate)}
                    {value === "Mega-Sena" && gotoMegaSena(navigate)}
                    {value === "Quina" && gotoQuina(navigate)}
                    {value === "Lotofácil" && gotoLotofacil(navigate)}
                    {value === "Lotomania" && gotoLotomania(navigate)}
                    {value === "Timemania" && gotoTimemania(navigate)}
                    {value === "Dia de Sorte" && gotoDiaDeSorte(navigate)}
        </div>

    )
}

