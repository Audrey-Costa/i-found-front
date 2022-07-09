import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
//import react

import Loading from '../shared/Loading';
//import components

export default function InputLogin(){
    const navigate = useNavigate();

    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    const [objNewLogin, setObjNewLogin] = useState({
        email: '',
        password: ''
    });

    const URL = 'htpp://localhost:5000';

    const [stateButton, setStateButton] = useState('habilitado');

    function newLogin(event){
        event.preventDefault();
    

        setStateButton('loading');
        // ===
        objNewLogin.email = inputEmail;
        objNewLogin.password = inputPassword;
        // ===

        setObjNewLogin({...objNewLogin});

        const promise = axios.post(URL, objNewLogin);

        promise.then(() => {
            navigate('../', { replace: true });
          });
          promise.catch(err => {
            console.log('esse é o erro:', err);
            setStateButton('err');
          });
          setInputEmail('');
          setInputPassword('');
        }

        if((stateButton === 'err' && inputEmail.length > 0) || (inputPassword.length > 0)){
            setStateButton('habilitado');
        }

    return (
        <ContainerFormClass>
        <form onSubmit={newLogin}>
          <InputClass
            placeholder="E-mail"
            type="email"
            value={inputEmail}
            onChange={e => setInputEmail(e.target.value)}
            required
          />
          <InputClass
            placeholder="Senha"
            type="password"
            value={inputPassword}
            onChange={e => setInputPassword(e.target.value)}
            required
          />
          <RegisterButton
            backgroundcolor={
              stateButton === 'err'
                ? '#d4d4d4'
                : stateButton === 'loading'
                ? '#8a8893'
                : '#16112B'
            }
            type="submit"
          >
            {stateButton === 'err' ? (
              'Email ou senha incorretas!'
            ) : stateButton === 'loading' ? (
              <Loading height={20} width={20} />
            ) : (
              'Cadastrar'
            )}
          </RegisterButton>
        </form>
      </ContainerFormClass>
    )
}

const RegisterButton = styled.button`
  width: 303px;
  height: 45px;
  background: ${props => props.backgroundcolor};
  border-radius: 4.63636px;
  border: none;
  font-size: 20.976px;
  color: white;
  font-family: 'Raleway', sans-serif;
  :hover {
    cursor: pointer;
  }
`;

const ContainerFormClass = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 190px;
  }
`;

const InputClass = styled.input`
  font-size: 20px;
  width: 100%;
  height: 58px;
  background: #ffffff;
  border: 1px solid #d4d4d4;
  font-family: 'Raleway', sans-serif;
  border-radius: 5px;
  padding-left: 10px;

  color: #000000;
  ::placeholder {
    color: #0004;
  }
`;