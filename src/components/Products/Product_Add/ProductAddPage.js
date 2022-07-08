import styled from 'styled-components';
//
import Header from '../../../shared/Header';
import TitlePage from '../../../shared/TitlePage';
import H1 from '../../../shared/H1';
import Main from '../../../shared/Main';
import ButtonSubmit from '../../../shared/ButtonSubmit';
import { useState } from 'react';
//
export default function Product_Add_Page() {
  const [inputNameProduct, setInputNameProduct] = useState('');
  return (
    <>
      <Header>
        <TitlePage>
          <H1>Adicionar produtos</H1>
        </TitlePage>
      </Header>
      <Main margin_top={'100'}>
        <FormStyle action="">
          <label htmlFor="categories">Escolha uma categoria: </label>
          <select name="categories" id="categories">
            <option value="hardware">Hardware</option>
            <option value="software">Software</option>
            <option value="memory">Memória</option>
            <option value="sound">som</option>
          </select>
          <InputClass
            placeholder="Nome do produto"
            type="text"
            value={inputNameProduct}
            onChange={e => setInputNameProduct(e.target.value)}
            required
          />

          <ButtonSubmit backgroundcolor={'#16112B'}> Casdastrar Produto </ButtonSubmit>
        </FormStyle>
      </Main>
    </>
  );
}

const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-between;
  select {
    background-color: #ffffff;
    border-radius: 5px 5px 0 0;
    text-align: center;
    font-family: 'Jost', sans-serif;
    font-size: 20px;
    height: 45px;
    width: 303px;
    margin-top: 5px;
  }
`;

const InputClass = styled.input`
  font-size: 20px;
  width: 100%;
  height: 58px;
  background: #ffffff;
  border: 1px solid #d4d4d4;
  font-family: 'Jost', sans-serif;
  border-radius: 5px;
  padding-left: 10px;

  color: #000000;
  ::placeholder {
    color: #0004;
  }
`;
