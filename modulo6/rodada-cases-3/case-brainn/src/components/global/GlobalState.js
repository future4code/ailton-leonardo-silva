import axios from 'axios'
import React from 'react'
import {useEffect, useState } from 'react'
import { GlobalContext } from "./GlobalContext"

const GlobalState = (props) => {
    
    
    const states = { }
    const setters = {  }
    const requests = {  }
    
    
    const Provider = GlobalContext.Provider

    return(
        <Provider value={{states, setters, requests}}>
            {props.children}
        </Provider>
    )
}

export default GlobalState