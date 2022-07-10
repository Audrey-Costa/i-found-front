import '../../css/reset.css';
import '../../css/styles.css';
//import css

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
//import react

import UserContext from '../../contexts/UserContext';
//import contexts

import RegisterPage from '../Register_Page/RegisterPage';
import LoginPage from '../Login/LoginPage';
import HomePage from '../Home_Page/HomePage';
import ProductAddPage from '../Products/Product_Add/ProductAddPage';
import ProductRegisteredPage from '../Products/Product_Add/ProductRegisteredPage';
import ProductsAndCategoriesContext from '../../contexts/ProductsAndCategoriesContext';

export default function App() {
  const [productsAndCategories, setProductsAndCategories] = useState(null);
  const [objLoginResponse, setObjLoginResponse] = useState({});

  return (
    <ProductsAndCategoriesContext.Provider
      value={{ productsAndCategories, setProductsAndCategories }}
    >
      <UserContext.Provider value={{ objLoginResponse, setObjLoginResponse }}>
        <BrowserRouter>
          <Routes>
            <Route path="/add-product" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<RegisterPage />} />
            <Route path="/" element={<ProductAddPage />} />

            <Route path="/sucessProductRegister" element={<ProductRegisteredPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ProductsAndCategoriesContext.Provider>
  );
}
