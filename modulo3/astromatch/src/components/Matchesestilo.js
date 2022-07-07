import styled from "styled-components";

export const ContainerMatches = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    justify-content: center;
`

export const DivMatches = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: white;
    border: none;
    box-shadow: 2px 2px 5px darkgray;
    border-radius: 0.4em;
    align-items: center;
    align-self: center;
    justify-content: flex-start;
    width: 32em;
    height: 32em;
`
export const HeaderMatches = styled.div`
    background-color: lightpink;
    width: 100%;
    height: 4em;
    border-radius: 0.4em;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px thin gray;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`
export const DivPhoto = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: white;
    border: none;
    align-items: center;
    align-self: center;
    justify-content: center;
    width: 100%;
    height: 75%;
    font-weight: bold;
`

export const FooterMatches = styled.div`
    background-color: lightpink;
    width: 100%;
    height: 4em;
    border-radius: 0.4em;
    border-top: 1px thin gray;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    position: bottom;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    font-weight: bold;
`

export const MatchPhoto = styled.img`
    width: 60%;
    height: 60%;
    box-shadow: 2px 2px 5px darkgray;
    border-radius: 0.4em;
    font-weight: bold;
`
