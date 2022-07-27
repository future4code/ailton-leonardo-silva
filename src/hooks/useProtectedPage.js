import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToLogin } from '../routes/Coordinator';

export default function useProtectedPage() {

    //Acessa o History
    const navigate = useNavigate();
      
    useEffect(() => {
        const token = window.localStorage.getItem("token");
      
        if (token === null) {
            console.log("Não está logado!!!");
            goToLogin(navigate)
        }
    }, [navigate]);
      

  return (
    <div>Essa página só pode ser acessada por usuários logados.</div>
  )
}
