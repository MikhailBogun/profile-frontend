import React ,{ useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons';

import './header.css';

import axios from "axios";
const url_registration = "http://127.0.0.1:3000/api/v1/registration";




function Header() {

  const navigate = useNavigate();

  const [username, setUsername] = useState('JohnDoe'); // replace with actual username

  function Logout() {
    let headers =  { headers: { Authorization: axios.defaults.headers.common['Authorization']}}
    axios.delete(url_registration, headers)
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


  function HelpForNavigate(where) {
    navigate('/'+where, { state:'weHave' })
  }

  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" to="/">{username}</Link>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav ms-auto">
    //         <li className="nav-item dropdown">
    //           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //             Profile
    //           </a>
    //           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    //             <li><Link className="dropdown-item" to="/my_profile">My Profile</Link></li>
    //             <li><Link className="dropdown-item" to="/all_profiles">All Profiles</Link></li>
    //           </ul>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" onClick={()=>{ Logout()}} >Logout</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <Navbar bg="light" expand="lg"  className="navbar-custom">
      <Container>
        <Navbar.Brand href="/profiles">
        <PersonCircle size={35} className="d-inline-block align-top person-icon" />{' '}

          My Website
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