import '../../css/reset.css';
import '../../css/styles.css';
//import css

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RegisterPage from '../Register_Page/RegisterPage';
import LoginPage from '../Login/LoginPage';
import HomePage from '../Home_Page/HomePage';
import ProductAddPage from '../Products/Product_Add/ProductAddPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add-product" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<RegisterPage />} />
        <Route path="/" element={<ProductAddPage />} />
      </Routes>
    </BrowserRouter>
  );
}
