import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../components/global/GlobalContext"
import { Seletor } from "../../components/Seletor"
import { useState } from "react"

const HomePage = () => {
    // const navigate = useNavigate()  
      return (
        <div>
            <div>
                            
                <Seletor/>
  


                
            </div>
            <div>
                <h1>Home Page do Case Brainn</h1>
            </div>
            
            
        </div>
    )
}

export default HomePage