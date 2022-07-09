import styled from 'styled-components';
import axios from 'axios';
//===
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//===

import UserContext from '../../../contexts/UserContext';

import ButtonSubmit from '../../shared/ButtonSubmit';
import Loading from '../../shared/Loading';

export default function InputRegisterProduct() {
  const navigate = useNavigate();
  const { objLoginResponse } = useContext(UserContext);
  const [inputCategory, setInputCategory] = useState('');
  const [inputNameProduct, setInputNameProduct] = useState('');
  const [inputAmountroduct, setInputAmountroduct] = useState('');
  const [inpuPriceProduct, setInpuPriceProduct] = useState('');
  const [inputDiscountProduct, setInputDiscountProduct] = useState('');
  const [selectCategory, setSelectCategory] = useState(1);
  const [objNewProduct, setObjNewProduct] = useState({
    category: '',
    name: '',
    amount: '',
    price: '',
    discount: ''
  });

  const URL = 'htpp://localhost:5000';

  const config = {
    headers: objLoginResponse.headers
  };

  const [stateButton, setStateButton] = useState('habilitado');

  function registerProduct(event) {
    event.preventDefault();
    setStateButton('loading');
    objNewProduct.category = selectCategory;
    if (inputCategory) objNewProduct.category = inputCategory;

    // ===

    objNewProduct.name = inputNameProduct;
    objNewProduct.amount = inputAmountroduct;
    objNewProduct.price = inpuPriceProduct;
    objNewProduct.discount = inputDiscountProduct;
    // ===

    setObjNewProduct({ ...objNewProduct });
    console.log('o objeto é', objNewProduct);
    const promise = axios.post(URL, objNewProduct);

    promise.then(() => {
      navigate('../sucessProductRegister', { replace: true });
    });
    promise.catch(err => {
      console.log('esse é o erro:', err);
      setStateButton('err');
    });
  }

  return (
    <ContainerFormStyle>
      <form onSubmit={registerProduct}>
        <section className="sectionCategories">
          <div className="containerSelect">
            <label htmlFor="categories">Escolha uma categoria: </label>
            <select
              value={selectCategory}
              onChange={e => setSelectCategory(e.target.value)}
              name="categories"
              id="categories"
            >
              <option value="hardware">Hardware</option>
              <option value="software">Software</option>
              <option value="memory">Memória</option>
              <option value="sound">som</option>
            </select>
          </div>
          <div className="containerAddCategory">
            <label htmlFor="inputCategory">Não encontrou? Adicione você mesmo:</label>
            <InputClass
              placeholder="Categoria"
              id="inputCategory"
              type="text"
              value={inputCategory}
              onChange={e => setInputCategory(e.target.value)}
            />
          </div>
        </section>

        <section className="sectionDescriptionProduct">
          <InputClass
            placeholder="Nome do produto"
            type="text"
            value={inputNameProduct}
            onChange={e => setInputNameProduct(e.target.value)}
            required
          />

          <InputClass
            placeholder="Qntd"
            type="number"
            value={inputAmountroduct}
            onChange={e => setInputAmountroduct(e.target.value)}
            required
          />
        </section>

        <section className="sectionPrice">
          <InputClass
            placeholder="Valor do produto"
            type="number"
            value={inpuPriceProduct}
            onChange={e => setInpuPriceProduct(e.target.value)}
            required
          />

          <InputClass
            placeholder="Desconto"
            type="number"
            value={inputDiscountProduct}
            onChange={e => setInputDiscountProduct(e.target.value)}
            required
          />
        </section>

        <ButtonSubmit
          type="submit"
          backgroundcolor={
            stateButton === 'err'
              ? '#8a8893'
              : stateButton === 'loading'
              ? '#8a8893'
              : '#16112B'
          }
        >
          {stateButton === 'err' ? (
            'Não foi possível cadastrar o produto'
          ) : stateButton === 'loading' ? (
            <Loading height={20} width={20} />
          ) : (
            'Casdastrar Produto'
          )}
        </ButtonSubmit>
      </form>
    </ContainerFormStyle>
  );
}

const ContainerFormStyle = styled.div`
  display: flex;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
    max-width: 600px;
  }

  .sectionCategories {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 10px;
    width: 100%;

    input:last-child {
      width: 100%;
      border-radius: 5px 5px 0 0;
    }

    .containerSelect {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;

      margin-right: 10px;

      select {
        background-color: #ffffff;
        border-radius: 5px 5px 0 0;
        text-align: center;
        font-family: 'Jost', sans-serif;
        font-size: 20px;
        height: 45px;
        min-width: 150px;
        width: 100%;

        margin-top: 5px;
      }
    }

    .containerAddCategory {
      display: flex;
      flex-direction: column;

      label {
        margin-left: 5px;
        margin-bottom: 4px;
        font-weight: 100;
        font-size: 15px;
      }
    }

    .containerAddCategory {
      width: 100%;
    }
  }

  .sectionDescriptionProduct {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 10px;
    width: 100%;
    input:first-child {
      margin-right: 10px;
    }
    input:last-child {
      width: 60px;
    }
  }

  .sectionPrice {
    display: flex;

    margin-bottom: 10px;

    input:first-child {
      margin-right: 10px;
    }
  }
`;

const InputClass = styled.input`
  font-size: 20px;
  width: 100%;
  height: 45px;
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
