import logo from './logo.svg';
import './App.css';
import React from 'react';

import SignupPage from './components/SignUp/SignupPage';
import ProfileList from './components/Profile/ProfileList';
import Login from './components/Login/Login';
import UserList from './components/User/UserList';
import UserDetails from './components/User/UserDetails';
import { Layout } from './components/Layout';
import DashboardInfo from './components/Dashboard/Dashboard';

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

  return (
    <BrowserRouter>
            <Routes> 
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route element={<Layout />}>
                <Route path= '/profiles' element={<ProfileList></ProfileList>} />
                <Route path="/all_profiles" element={<ProfileList all={true}></ProfileList>} />
                <Route path="/users" element={<UserList ></UserList>}>
                </Route>
                <Route path="/user/:id" element={<UserDetails />} />

                <Route path=":dashboard" element={<DashboardInfo />} />
            </Route>
            </Routes>
    </BrowserRouter>
  );
}

export default App;
