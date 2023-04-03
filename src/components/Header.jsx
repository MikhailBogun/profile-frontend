import React ,{ useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons';
import Cookies from 'universal-cookie';


import './header.css';

import axios from "axios";
const cookies = new Cookies();




function Header() {

  const navigate = useNavigate();
  let current_url = process.env.REACT_APP_BACKEND_URL + 'registration';
  const [username, setUsername] = useState('JohnDoe'); // replace with actual username

  const Logout = () => {
    let headers =  { headers: { Authorization: axios.defaults.headers.common['Authorization']}}
    axios.delete(current_url, headers)
    .then(response => {
      console.log('Success:', response);
      localStorage.removeItem('user');
      localStorage.removeItem('isAdmin');
      axios.defaults.headers.common['Authorization'] = ``;
      navigate('/')
    })
    .catch(error => {
      console.error('Error:', error);
      alert(error);
      navigate('/');
    });
  }


  const HelpForNavigate = (where) => {
    navigate('/'+where)
  }

  useEffect(() => {
    setUsername(cookies.get('username'))
  }, []);

  return (
    <Navbar bg="light" expand="lg"  className="navbar-custom">
      <Container>
        <Navbar.Brand href="/profiles">
          <PersonCircle size={35} className="d-inline-block align-top person-icon" />{' '}
          {username}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={()=>{ HelpForNavigate('users')}} >Users</Nav.Link>
            <Nav.Link onClick={()=>{ HelpForNavigate('dashboard')}}>Dashboard</Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={()=>{ HelpForNavigate('profiles')}}>My Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{ HelpForNavigate('all_profiles')}}>
                All Profiles
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={()=>{ Logout()}}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;