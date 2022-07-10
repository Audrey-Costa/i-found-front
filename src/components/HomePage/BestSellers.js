import { useState, useEffect } from "react";
import styled from "styled-components"
import { BiCart, BiHeart } from "react-icons/bi"

export default function BestSellers(){
    return (
        <Content>
            <div><img src="https://images-na.ssl-images-amazon.com/images/I/41lV8jRUrIL._AC_SX184_.jpg" alt="" /><div><div><h2>Console Xbox Series S Microsoft</h2><h1>R$ 2.129,00</h1></div><div><BiHeart/><BiCart/></div></div></div>
            <div><img src="https://images-na.ssl-images-amazon.com/images/I/41lV8jRUrIL._AC_SX184_.jpg" alt="" /><div><div><h2>Console Xbox Series S Microsoft</h2><h1>R$ 2.129,00</h1></div><div><BiHeart/><BiCart/></div></div></div>
            <div><img src="https://images-na.ssl-images-amazon.com/images/I/41lV8jRUrIL._AC_SX184_.jpg" alt="" /><div><div><h2>Console Xbox Series S Microsoft</h2><h1>R$ 2.129,00</h1></div><div><BiHeart/><BiCart/></div></div></div>
            <div><img src="https://images-na.ssl-images-amazon.com/images/I/41lV8jRUrIL._AC_SX184_.jpg" alt="" /><div><div><h2>Console Xbox Series S Microsoft</h2><h1>R$ 2.129,00</h1></div><div><BiHeart/><BiCart/></div></div></div>

        </Content>
    )
}

const Content = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;

    > div{
        width: 200px;
        height: 260px;
        display: flex;
        flex-direction: column;
        background-color: white;
        border-radius: 20px;
        padding: 10px;
        div{
            display: flex;
            div{
                flex-direction: column;
                font-size: 2.5rem;
                h2{
                    font-size: 1.2rem;
                    margin-bottom: 10px;
                }
                h1{
                    font-size: 1.8rem;
                }
            }
        }
    }

    img{
            width: 100%;
            margin-right: 10%;
            border-radius: 20px;
    }

`