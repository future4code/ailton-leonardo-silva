import React from "react"
import { BrowserRouter , Routes , Route } from "react-router-dom"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import HomePage from "../pages/HomePage/HomePage"

export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                {/* <Route path="Error" element={<ErrorPage />}/> */}
            </Routes>
        </BrowserRouter>
    )
}