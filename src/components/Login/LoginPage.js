import ButtonOnlyWords from "../../shared/ButtonOnlyWords";
import Main from "../../shared/Main";
import logo from '../../assets/logo.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import InputLogin from "./InputLogin";

export default function Login_Page(){
    return (
        <Main margin_top={'35'}>
            <Logo src= {logo} alt="Logotipo if(ound)"/>
            <InputLogin />
            <Link to="/sign-up"><ButtonOnlyWords>Não possui cadastro? Registre-se!</ButtonOnlyWords></Link>
        </Main>
    )
}

const Logo = styled.img`
  width: 150px;
  margin-bottom: 10px;
`;