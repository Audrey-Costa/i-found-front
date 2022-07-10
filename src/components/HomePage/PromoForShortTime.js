import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import { BiCart, BiHeart } from "react-icons/bi"

export default function PromoForShortTime(){
    return (
        <Content>
                <div>
                    <Link to="/" style={{textDecoration: "none", color: "black"}}>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/41lV8jRUrIL._AC_SX184_.jpg" alt="" />
                        <div><h2>Console Xbox Series S Microsoft</h2><h1>R$ 2.129,00</h1><h3>2.649,00</h3></div>
                    </Link>
                    <div><BiHeart/><BiCart/></div>
                </div>
                <div>
                    <Link to="/" style={{textDecoration: "none", color: "black"}}>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/41lV8jRUrIL._AC_SX184_.jpg" alt="" />
                        <div><h2>Console Xbox Series S Microsoft</h2><h1>R$ 2.129,00</h1><h3>2.649,00</h3></div>
                    </Link>
                    <div><BiHeart/><BiCart/></div>
                </div>
                <div>
                    <Link to="/" style={{textDecoration: "none", color: "black"}}>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/41lV8jRUrIL._AC_SX184_.jpg" alt="" />
                        <div><h2>Console Xbox Series S Microsoft</h2><h1>R$ 2.129,00</h1><h3>2.649,00</h3></div>
                    </Link>
                    <div><BiHeart/><BiCart/></div></div>
        </Content>
    )
}

const Content = styled.div`
    display: flex;
    width: 90%;
    height: 110px;
    margin-bottom: 60px;
    overflow-y: hidden;
    > div:last-child{
        margin-right: 10px;
    }
    > div{
        min-width: 300px;
        max-width: 300px;
        margin-left: 20px;
        box-shadow: 6px 5px 5px black;
        height: 100px;
        background-color: white;
        border-radius: 20px 0;
        display: flex;
        justify-content: space-between;
        a {
            display: flex;
            img{
                width: 100px;
                margin-right: 10%;
                border-radius: 20px;
            }
            div{
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
        }
        div:last-child{
            height: 70%;
            font-size: 30px;
            margin: 5%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }
    }

    @media(max-width: 800px) {
        height: 70px;
        > div{
            min-width: 200px;
            max-width: 200px;
            height: 90%;
            a{
                img{
                    width: 60px;
                }
                div{
                    h2{
                        margin-top: 10%;
                        font-size: 10px;
                    }
                    h1{
                        font-size: 12px;
                    }
                    h3{
                        font-size: 8px;
                        text-decoration-line: line-through;
                        margin-bottom: 10%;
                    }
                }    
            }
            div:last-child{
                font-size: 4.2em;
            }
        }
        
    }
`