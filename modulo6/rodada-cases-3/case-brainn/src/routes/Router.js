import React from "react"
import { BrowserRouter , Routes , Route } from "react-router-dom"
import DiaDeSortePage from "../pages/DiaDeSortePage/DiaDeSortePage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import HomePage from "../pages/HomePage/HomePage"
import LotofacilPage from "../pages/LotofacilPage/Lotofacil"
import LotomaniaPage from "../pages/LotomaniaPage/LotomaniaPage"
import MegaSenaPage from "../pages/MegaSenaPage/MegaSenaPage"
import QuinaPage from "../pages/QuinaPage/QuinaPage"
import TimemaniaPage from "../pages/TimemaniaPage/TimemaniaPage"

export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="DiaDeSorte" element={<DiaDeSortePage />}/>
                <Route path="Lotofacil" element={<LotofacilPage />}/>
                <Route path="Lotomania" element={<LotomaniaPage />}/>
                <Route path="MegaSena" element={<MegaSenaPage />}/>
                <Route path="Quina" element={<QuinaPage />}/>
                <Route path="Timemania" element={<TimemaniaPage />}/>
                <Route path="Error" element={<ErrorPage />}/>
            </Routes>
        </BrowserRouter>
    )
}