import '../../css/reset.css';
import '../../css/styles.css';
//import css

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Register_Page from '../Register_Page/Register_Page';
import LoginPage from '../Login/LoginPage';
import Home_Page from '../Home_Page/Home_Page';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home_Page />} />
        <Route path="/home" element={<LoginPage />} />
        <Route path="/sign-up" element={<Register_Page />} />
      </Routes>
    </BrowserRouter>
  );
}
