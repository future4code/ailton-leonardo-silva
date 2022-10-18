import styled from "styled-components";
import {backgroundColor, backgroundColor2, blackColor, whiteColor} from "../../constants/colors"


export const Container = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-columns: 500px 1fr;
    justify-items: center;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
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
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    background-color: ${backgroundColor};

    @media screen and (min-width: 100px) and (max-width: 699px) {
        display: flex;
        flex-direction: column;
        width: fit-content;
        height: 100%;
        flex-wrap: wrap;
        align-items: center;
        align-self: center;
        justify-items: center;
        justify-content: center;
       
    }

    @media screen and (min-width: 700px) and (max-width: 1100px) {
        
    }

`
export const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 59rem;
    height: 47.5rem;
    padding-left: 0.2rem;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    background-color: ${backgroundColor};
    @media screen and (min-width: 100px) and (max-width: 699px) {
        display: flex;
        width: 100vw;
        height: 100%;
        flex-direction: column;
        align-items: center;
        align-content: center;
        text-align:center;
        justify-content: space-between;
        font-family: 'Montserrat', sans-serif;
        background-color: ${backgroundColor};
        padding-top: 2rem;
    }
`

export const Header_Sidebar = styled.div`
    display: flex;
    flex-direction: row;
    width: 38.3rem;
    height: 20%;
    align-items: center;
    align-content: center;
    align-self: center;
    border-top-right-radius: 80% ;
    font-family: 'Montserrat', sans-serif;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: ${backgroundColor};

    @media screen and (min-width: 100px) and (max-width: 699px) {
        display: flex;
        flex-direction: column;
        width: 100vw;
        flex-wrap: wrap;
        align-items: center;
        align-self: left;
        justify-items: center;
        justify-content: center;
        border-top-right-radius: 0 ;
       
    }
    
`

export const Header_Main = styled.div`
    display: flex;
    flex-direction: row;
    height: 20%;
    align-items: center;
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
    align-items: center;
    align-content: center;
    align-self: center;
    font-family: 'Montserrat', sans-serif;
    justify-content: space-evenly;
    flex-wrap: wrap;
    background-color: ${backgroundColor};
    color: ${whiteColor};

    @media screen and (min-width: 100px) and (max-width: 699px) {
        display: flex;
        flex-direction: column;
        width: 100vw;
        flex-wrap: wrap;
        align-items: center;
        align-self: center;
        justify-items: center;
        justify-content: center;
       
    }
`

export const Footer_Sidebar = styled.div`
    display: flex;
    flex-direction: row;
    width: 38.3rem;
    height: 20%;
    border-bottom-right-radius: 80%;
    align-items: center;
    align-content: center;
    align-self: center;
    font-family: 'Montserrat', sans-serif;
    justify-content: center;
    flex-wrap: wrap;
    background-color: ${backgroundColor};
    color: ${whiteColor};

    @media screen and (min-width: 100px) and (max-width: 699px) {
        border-bottom-left-radius: 70%;
        border-bottom-right-radius: 70%;
        display: flex;
        flex-direction: column;
        width: 100vw;
        flex-wrap: wrap;
        align-items: center;
        align-self: center;
        justify-items: center;
        justify-content: center;
    }
    

    @media screen and (min-width: 700px) and (max-width: 1100px) {
        
    }

`
export const Footer_Main = styled.span`
    display: flex;
    flex-direction: row;
    height: 20%;
    align-items: center;
    align-content: center;
    align-self: center;
    font-family: 'Montserrat', sans-serif;
    justify-content: left;
    flex-wrap: wrap;
    background-color: ${backgroundColor};
    color: ${whiteColor};
    @media screen and (min-width: 100px) and (max-width: 699px) {
        display: flex;
        flex-direction: row;
        width: 100vw;
        flex-wrap: wrap;
        padding-bottom: 2rem;
        padding-top: 2rem;
        align-items: center;
        align-self: center;
        justify-items: center;
        justify-content: center;
    }
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
    font-weight: bolder;
    text-align: center;
`

export const Numbers_div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

  @media screen and (min-width: 100px) and (max-width: 699px) {
        display: flex;
        flex-direction: row;
        /* width: 100vw; */
        flex-wrap: wrap;
        align-items: center;
        align-self: center;
        justify-items: center;
        justify-content: space-evenly;
    }    
    
`;

export const Name_div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const H3 = styled.h3`
font-size: 2.5vw;
color: ${whiteColor};
@media screen and (min-width: 100px) and (max-width: 699px) {
    font-size: 8vw;
}

`

export const H4 = styled.h4`
font-size: 2vw;
color: ${blackColor};
@media screen and (min-width: 100px) and (max-width: 699px) {
    display: flex;
    flex-wrap: wrap;
    font-size: 6vw;
}

`

export const H5 = styled.h5`
font-size: 1.5vw;
color: ${blackColor};
@media screen and (min-width: 100px) and (max-width: 699px) {
    display: flex;
    flex-wrap:wrap;
    font-size: 4vw;
}

`

export const H6 = styled.h6`
font-size: 1vw;
color: ${whiteColor};

@media screen and (min-width: 100px) and (max-width: 699px) {
    display: flex;
    flex-wrap:wrap;
    font-size: 4vw;
}

`