import logo from './logo.svg';
import './App.css';

import SignupPage from './components/SignUp/SignupPage';
import Main from './components/Main';
import Login from './components/Login/Login';

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/home" element={<Main />} />
            </Routes>
    </BrowserRouter>
  );
}

export default App;
