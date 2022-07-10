import { useState, useEffect } from "react";
import styled from "styled-components"
import { BiCart, BiHeart } from "react-icons/bi"

export default function PromoForShortTime(){
    return (
        <Content>
            <div><img src="https://images-na.ssl-images-amazon.com/images/I/41lV8jRUrIL._AC_SX184_.jpg" alt="" /><div><h2>Console Xbox Series S Microsoft</h2><h1>R$ 2.129,00</h1><h3>2.649,00</h3></div><div><BiHeart/><BiCart/></div></div>
            <div><img src="https://images-na.ssl-images-amazon.com/images/I/41lV8jRUrIL._AC_SX184_.jpg" alt="" /><div><h2>Console Xbox Series S Microsoft</h2><h1>R$ 2.129,00</h1><h3>2.649,00</h3></div><div><BiHeart/><BiCart/></div></div>
            <div><img src="https://images-na.ssl-images-amazon.com/images/I/41lV8jRUrIL._AC_SX184_.jpg" alt="" /><div><h2>Console Xbox Series S Microsoft</h2><h1>R$ 2.129,00</h1><h3>2.649,00</h3></div><div><BiHeart/><BiCart/></div></div>

        </Content>
    )
}

const Content = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 60px;

    > div{
        width: 30vw;
        height: 20vh;
        background-color: white;
        border-radius: 20px 0;
        display: flex;
        justify-content: space-between;

        img{
            width: 30%;
            margin-right: 10%;
            border-radius: 20px;
        }

        div{
            display: flex;
            flex-direction: column;
            height: 40%;
            justify-content: space-between;
        }
        div:nth-child(2){
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 100%;
            h2{
                margin-top: 10%;
                font-size: 16px;
                text-overflow: wrap;
            }
            h1{
                font-size: 20px;
            }
            h3{
                font-size: 12px;
                text-decoration-line: line-through;
                margin-bottom: 10%;
            }
        }
        div:last-child{
            height: 70%;
            font-size: 30px;
            margin: 5%;
            display: flex;
            justify-content: space-evenly;
        }
    }

    @media(max-width: 700px) {
        > div{
            width: 30%;
            height: 15vw;
            img{
                width: 5vw;
                height: 5vw;
            }
            div:nth-child(2){
                h2{
                    margin-top: 10%;
                    font-size: 0.6em;
                }
                h1{
                    font-size: 0.8em;
                }
                h3{
                    font-size: 0.4em;
                    text-decoration-line: line-through;
                    margin-bottom: 10%;
                }
            }    
            div:last-child{
                font-size: 1.2em;
            }
        }
    }
`