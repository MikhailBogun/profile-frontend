import logo from './logo.svg';
import './App.css';

import SignupPage from './components/SignupPage';
import Main from './components/Main';

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
            <Routes>
              {/* <Route path="/" element={<Login />} /> */}
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/home" element={<Main />} />
            </Routes>
    </BrowserRouter>
  );
}

export default App;
