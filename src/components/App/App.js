import '../../css/reset.css';
import '../../css/styles.css';
//import css

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
//import react

import UserContext from '../../contexts/UserContext';
//import contexts

import ProductAddPage from '../Products/Product_Add/ProductAddPage';
import ProductRegisteredPage from '../Products/Product_Add/ProductRegisteredPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';

export default function App() {
  const [objLoginResponse, setObjLoginResponse] = useState({});

  return (
    <UserContext.Provider value={{ objLoginResponse, setObjLoginResponse }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<RegisterPage />} />
          <Route path="/add-product" element={<ProductAddPage />} />
          <Route path="/sucessProductRegister" element={<ProductRegisteredPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
