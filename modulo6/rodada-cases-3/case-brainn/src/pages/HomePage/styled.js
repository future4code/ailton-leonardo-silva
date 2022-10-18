import styled from "styled-components";
import {backgroundColor, backgroundColor2, blackColor, whiteColor} from "../../constants/colors"


// @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    flex-wrap: wrap;
    background-color: ${backgroundColor};

    @media screen and (min-width: 100px) and (max-width: 699px) {
        grid-template-columns: 1fr;
      }
    @media screen and (min-width: 700px) and (max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
    }
`

export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 38.2rem;
    height: 47.5rem;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    background-color: ${backgroundColor};
`
export const Main = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.2em;
    padding: 0.2em;
    width: 59rem;
    height: 47.5rem;
    font-family: 'Montserrat', sans-serif;
    background-color: ${backgroundColor};
`

export const Header_Sidebar = styled.div`
    display: flex;
    flex-direction: row;
    width: 38.3rem;
    height: 20%;
    align-itens: center;
    align-content: center;
    align-self: center;
    font-family: 'Montserrat', sans-serif;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: ${backgroundColor};
`

export const Main_Sidebar = styled.div`
    display: flex;
    flex-direction: row;
    width: 38.3rem;
    height: 60%;
    align-itens: center;
    align-content: center;
    align-self: center;
    font-family: 'Montserrat', sans-serif;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: ${backgroundColor};
    color: ${whiteColor};
`

export const Footer_Sidebar = styled.div`
    display: flex;
    flex-direction: row;
    width: 38.3rem;
    height: 20%;
    align-itens: center;
    align-content: center;
    align-self: center;
    font-family: 'Montserrat', sans-serif;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: ${backgroundColor};
    color: ${whiteColor};
`
export const ButtonNumber = styled.button`
    color: ${blackColor};
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: ${whiteColor};
    border: none;
    font-family: 'Montserrat', sans-serif;
    margin: 15px 0px 0px 15px;
    font-weight: bold;
    &:hover {
    background-color: ${backgroundColor2};
    }
`

export const Select = styled.select`
    color: ${blackColor};
    width: 13.5rem;
    height: 2.8rem;
    border-radius: 4%;
    justify-content: center;
    align-self: center;
    background-color: ${whiteColor};
    border: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
`

export const Numbers_div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
`;

export const Name_div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;