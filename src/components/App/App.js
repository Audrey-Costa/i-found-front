import '../../css/reset.css';
import '../../css/styles.css';
//import css

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Register_Page from '../Register_Page/Register_Page';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register_Page />} />
      </Routes>
    </BrowserRouter>
  );
}
