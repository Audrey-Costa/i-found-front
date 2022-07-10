import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductsAndCategoriesContext from '../../../contexts/ProductsAndCategoriesContext';

export default function SelectCategory({ setSelectedCategory, selectedCategory }) {
  const { productsAndCategories, setProductsAndCategories } = useContext(
    ProductsAndCategoriesContext
  );

  const URL = 'http://localhost:5000/products';

  useEffect(() => {
    console.log('asdasd');
    const promise = axios.get(URL);
    promise.then(response => {
      setProductsAndCategories(response.data);

      console.log(response.data, '1');
    });
    promise.catch(() => {
      console.log('err ao pegar categorias');
    });
  }, []);

  return (
    <SelectCategoryStyle>
      <label htmlFor="categories">Escolha uma categoria: </label>
      <select
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.target.value)}
        name="categories"
      >
        {productsAndCategories !== null &&
        productsAndCategories.categoriesWithTitle.length > 0
          ? productsAndCategories.categoriesWithTitle.map((category, index) => (
              <option key={index} value={category.category}>
                {category.title}
              </option>
            ))
          : ''}
      </select>
    </SelectCategoryStyle>
  );
}

const SelectCategoryStyle = styled.div`
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
`;
