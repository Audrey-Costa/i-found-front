import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
//import react

import Loading from '../../shared/Loading';
import ButtonSubmit from '../../shared/ButtonSubmit';
//import components

import UserContext from '../../contexts/UserContext';

export default function InputLogin() {
  const { setObjLoginResponse } = useContext(UserContext);

  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [objNewLogin, setObjNewLogin] = useState({
    email: '',
    password: ''
  });

  const URL = 'htpp://localhost:5000';

  const [stateButton, setStateButton] = useState('habilitado');

  function newLogin(event) {
    event.preventDefault();

    setStateButton('loading');
    // ===
    objNewLogin.email = inputEmail;
    objNewLogin.password = inputPassword;
    // ===

    setObjNewLogin({ ...objNewLogin });

    const promise = axios.post(URL, objNewLogin);

    promise.then(() => {
      setObjLoginResponse(promise.data);
      navigate('../home', { replace: true });
    });
    promise.catch(err => {
      console.log('esse é o erro:', err);
      setStateButton('err');
    });
    setInputEmail('');
    setInputPassword('');
  }

  if (stateButton === 'err' && inputEmail.length > 0) {
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
        <ButtonSubmit
          width={'303px'}
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
        </ButtonSubmit>
      </form>
    </ContainerFormClass>
  );
}

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

  border-radius: 5px;
  padding-left: 10px;
  font-family: 'Jost', sans-serif;
  color: #000000;
  ::placeholder {
    color: #0004;
  }
`;
