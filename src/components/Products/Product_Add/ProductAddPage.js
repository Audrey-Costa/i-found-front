import styled from 'styled-components';
//
import Header from '../../../shared/Header';
import TitlePage from '../../../shared/TitlePage';
import H1 from '../../../shared/H1';
import Main from '../../../shared/Main';

import InputRegisterProduct from './InputsRegisterProduct';
//
export default function Product_Add_Page() {
  return (
    <>
      <Header>
        <TitlePage>
          <H1>Adicionar produtos</H1>
        </TitlePage>
      </Header>
      <Main margin_top={'100.1'}>
        <InputRegisterProduct />
      </Main>
    </>
  );
}
