import Main from '../../shared/Main';
import InputsRegister from './InputsRegister';
import ButtonOnlyWords from '../../shared/ButtonOnlyWords.js';
import logo from '../../assets/logo.png';
import styled from 'styled-components';
export default function Register_Page() {
  return (
    <>
      <Main margin_top={'35'}>
        <Logo src={logo} alt="" />
        <InputsRegister />
        <ButtonOnlyWords>Já possui cadastro? Faça login!</ButtonOnlyWords>
      </Main>
    </>
  );
}

const Logo = styled.img`
  width: 150px;
  margin-bottom: 10px;
`;
