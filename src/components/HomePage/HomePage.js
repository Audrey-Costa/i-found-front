import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../shared/Header"
import ProductsOnSale from "./ProductsOnSale";
import PromoForShortTime from "./PromoForShortTime";
import BestSellers from "./BestSellers";
import logo from "../../assets/logo.png"
import background from "../../assets/background.jpeg"
import bannerPromocional from "../../assets/bannerPromocional.jpg"
import {BiUserCircle, BiCart, BiHeart} from "react-icons/bi"

export default function HomePage(){
    return (
        <Content>
            <Header>
                <div>
                    <Link to="/" style={{textDecoration: "none"}}><img src={logo} alt="logo i-found" /></Link>
                    <input type="search" name="search" placeholder="Busque pelo seu produto"/>
                    <span>
                        <div>
                            <BiUserCircle/>
                            <p>Faça <Link to="/login" style={{textDecoration: "none", color: "black", fontWeight: "bold"}}>login</Link> ou crie seu <Link to="/sign-up" style={{textDecoration: "none", color: "black", fontWeight: "bold"}}>cadastro</Link> </p>
                        </div>
                        <Link to="/" style={{textDecoration: "none", color: "black"}}>
                            <BiCart/>
                        </Link>
                        <Link to="/" style={{textDecoration: "none", color: "black"}}>
                            <BiHeart/>
                        </Link>
                    </span>
                </div>
                <div>
                    <span>Home</span>
                    <div></div>
                    <span>Computadores</span>
                    <div></div>
                    <span>Games</span>
                    <div></div>
                    <span>Acessórios</span>
                    <div></div>
                    <span>Cadeiras Gamer</span>
                    <div></div>
                    <span>LEDs</span>

                </div>
            </Header>
            <ProductsOnSale img={bannerPromocional} to={"/sign-up"}>
            </ProductsOnSale>
            <PromoForShortTime>
            </PromoForShortTime>
            <BestSellers>

            </BestSellers>
            <BestSellers>

            </BestSellers>
            <BestSellers>

            </BestSellers>
        </Content>
    )
}

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background: url(${background}) no-repeat center;
    background-size: cover;

    header {
        width: 100%;
        height: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: start;
    }

    header > :first-child{
        background-color: rgba(255, 255,  255, 0.9);
        width: 100%;
        height: 50px;
        display:flex;
        justify-content:space-between;
        align-items: center;
    }

    header > :first-child > input{
        width: 300px;
        height: 5vh;
        font-size: 16px;
    }

    header > :first-child > span{
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 24px;
    }

    header > :first-child > span > div{
        font-size: 16px;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    header > :first-child > span > div > :first-child{
        font-size: 69px;
        margin: 0 10px;
    }

    header img{
        width: 50px;
        margin: 0 20px;
    }

    header > :last-child{
        width: 100%;
        height: 8vh;
        background-color: black;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    header > :last-child div{
        background-color: white;
        width: 2px;
        height: 68%;
        border-radius: 50px;
    }

    header > :last-child span{
        width: 15%;
        height: 95%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 18px;
        text-align: center;
        font-weight: 600;
    }

    @media(max-width: 800px){
        header > :first-child > input{
            width: 100px;
            height: 30px;
            font-size: 8px;
        }
        header > :first-child > span{
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
        }
        header > :first-child > span > div{
        font-size: 8px;
        }
        header > :first-child > span > div > :first-child{
        font-size: 40px;
        margin: 0 10px;
        }
        header > :last-child span{
            font-size: 7px;
        }
    } 
`