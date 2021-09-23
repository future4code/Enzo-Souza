import React from 'react';
import styled from 'styled-components';

const pcardcontainer = styled.body`
    display:inline-block;
    align-items:center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

const pcardcontainerimg = styled.img `
    width: 30px;
    border-radius: 50%;
    margin-left:6%;
    margin-top: 10px;
    margin-bottom: 10px;
`


function CardPequeno(props) {
    return (

    <pcard-container>
        <img src={props.imagem1} />
        <div>
        <h4>{props.endereco}</h4>
        <p>{props.email}</p>
        </div>
        <img src={props.imagem}/>
    </pcard-container>

    )
}

export default CardPequeno;