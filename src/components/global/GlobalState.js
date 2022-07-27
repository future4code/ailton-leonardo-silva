import React from 'react'
import { GlobalContext } from "./GlobalContext"

const GlobalState = (props) => {
    
    const Provider = GlobalContext.Provider

    return(
        <Provider>
            {props.children}
        </Provider>
    )
}

export default GlobalState