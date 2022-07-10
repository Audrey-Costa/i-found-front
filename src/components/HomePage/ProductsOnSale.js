import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

export default function ProductsOnSale(props){
    return (
        <Content>
            <Link to={props.to}><img src={props.img} alt="" /></Link>
        </Content>
    )
}

const Content = styled.div`
    width: 80%;
    background-color: none;
    margin: 40px 0px;

    img{
        width: 100%;
        border-radius: 50px;
    }
`