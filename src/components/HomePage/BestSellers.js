import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiCart, BiHeart } from "react-icons/bi";

export default function BestSellers(){
    return (
        <Content>
            <p>Categoria</p>
            <div>
                <div>
                    <Link to="/" style={{textDecoration: "none", color: "black"}}>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/41lV8jRUrIL._AC_SX184_.jpg" alt="" />
                    </Link>
                    <div>
                        <div>
                            <Link to="/" style={{textDecoration: "none", color: "black"}}>
                                <h2>Console Xbox Series S Microsoft</h2>
                            </Link>
                            <h1>R$ 2.129,00</h1>
                        </div>
                        <div>
                            <BiHeart/><BiCart/>
                        </div>
                    </div>
                </div>
                <div><img src="https://images-na.ssl-images-amazon.com/images/I/41lV8jRUrIL._AC_SX184_.jpg" alt="" /><div><div><h2>Console Xbox Series S Microsoft</h2><h1>R$ 2.129,00</h1></div><div><BiHeart/><BiCart/></div></div></div>
                <div><img src="https://images-na.ssl-images-amazon.com/images/I/41lV8jRUrIL._AC_SX184_.jpg" alt="" /><div><div><h2>Console Xbox Series S Microsoft</h2><h1>R$ 2.129,00</h1></div><div><BiHeart/><BiCart/></div></div></div>
                <div><img src="https://images-na.ssl-images-amazon.com/images/I/41lV8jRUrIL._AC_SX184_.jpg" alt="" /><div><div><h2>Console Xbox Series S Microsoft</h2><h1>R$ 2.129,00</h1></div><div><BiHeart/><BiCart/></div></div></div>
            </div>
        </Content>
    )
}

const Content = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 50px;
    p{
            font-size: 26px;
            font-weight: 700;
            position: absolute;
        }
        > div{
            overflow-y: hidden;
            display: flex;
            justify-content: space-evenly;
            align-items: flex-end;
            background-color: rgba(11,182,252,0.7);
            border-radius: 20px;
            width: 90vw;
            height: 240px;
            > div:first-child{
                margin-left: 20px;
            }
    
            > div{
                margin-right: 20px;
            }
            > div{
                min-width: 120px;
                max-width: 120px;
                margin-bottom: 10px;
                height: 170px;
                display: flex;
                flex-direction: column;
                background-color: white;
                border-radius: 20px;
                border: 2px solid black;
                padding: 10px;
                > div{
                    display: flex;
                    div{
                        flex-direction: column;
                        font-size: 2.5rem;
                        h2{
                            font-size: 12px;
                            margin-bottom: 10px;
                        }
                        h1{
                            font-size: 16px;
                        }
                    }
                }
            }
        }
        
    @media (max-width: 800px){
        p{
            font-size: 26px;
            font-weight: 700;
            position: absolute;
        }
        > div{
            overflow-y: hidden;
            display: flex;
            justify-content: space-around;
            align-items: flex-end;
            background-color: #fff;
            border-radius: 20px;
            width: 168%;
            height: 220px;
            background-color: rgba(0,152,252,0.7);
            box-sizing: border-box;
            > div{
                margin-right: 20px;
                min-width: 120px;
                max-width: 120px;
                height: 150px;
                display: flex;
                flex-direction: column;
                border-radius: 20px;
                padding: 10px;
                > div{
                    display: flex;
                    justify-content: space-between;
                    font-size: 20px;
                    div:first-child{
                        margin-right: 5px;
                        flex-direction: column;
                        h2{
                            font-size: 12px;
                            margin-bottom: 8px;
                        }
                        h1{
                            font-size: 16px;
                        }
                    }
                }
            }
        }
    }
    @media (max-width: 677px){
        > div{
            justify-content: initial;
        }
    }
    
    img{
            width: 100%;
            margin-right: 10%;
            border-radius: 20px;
    }

`