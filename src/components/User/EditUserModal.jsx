import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from "axios";


const EditUserModal = ({ show, user, handleClose, url }) => {
  const [edit_username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [check_user_role, setRoleAdmin] = useState(false);
  // let current_url = process.env.REACT_APP_BACKEND_URL + 'user/'+user.id;



  useEffect(() => {
    console.log(user)
    setName(user.username)
    setEmail(user.email)
    setRoleAdmin(user.isAdmin?.toString())
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault(event);
    axios.put(url, {
      data: {
        edit_data: {
          id: user.id,
          username: edit_username,
          email: email,
          isAdmin: check_user_role?.toLowerCase?.()
        }
      }
    })
      .then(response => {
        console.log('Success:', response);
        handleClose()

      })
      .catch(error => {
        console.error('Error:', error);
        alert(error)
        handleClose()
      });

  };

  return (
    <Modal show={show} onHide={handleClose} centered className='text-center modal-sm'>
      <Modal.Header closeButton>
        <Modal.Title >Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formNameUser">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={edit_username}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formEmailUser">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter city"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formAdminEdit">
            <div className="text-center">
              <Form.Check
                inline
                type="radio"
                name="isEditAdmin"

                label="Admin"
                id="is-admin"
                value="true"
                checked={check_user_role == "true"}
                onChange={(e) => setRoleAdmin(e.target.value)}
              />
              <Form.Check
                inline
                type="radio"
                name="isEditAdmin"
                label="User"
                id="is-user"
                value="false"
                checked={check_user_role === "false"}
                onChange={(e) => setRoleAdmin(e.target.value)}
              />
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className='d-block text-center'>
        <Button variant="secondary" onClick={handleSubmit} >
          <span className="bi bi-check">save</span>
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          <span className="btn-label"><i className="bi bi-x">close</i></span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditUserModal;
