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
              <Route path="/profiles" element={<Main page={'profiles'}/>} />
              <Route path="/all_profiles" element={<Main page={'all_profiles'} />} />
              <Route path="/users" element={<Main page={'users'}/>} />
              <Route path="/dashboard" element={<Main page={'dashboar'}/>} />
            </Routes>
    </BrowserRouter>
  );
}

export default App;
