import React, {useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from "axios";
const url = "http://127.0.0.1:3000/api/v1/user";


const EditProfileModal = ({ show, user, handleClose}) => {

  const [name, setName] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [isAdmin, setAdmin] = useState(profile.birthdate);

  const handleSubmit = (event) => {
    event.preventDefault();
    let current_url = url + '/' + user.id;
    axios.put(current_url , {  data: {
      edit_data: {
        id: user.id,
        name: name,
        email: email,
        isAdmin: isAdmin
      }
    }})
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
        <Modal.Title >Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBirthday">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter city"

              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formAdmin">
            <div className="text-center">
              <Form.Check
                inline
                type="radio"
                label="Admin"
                id="gender-male"
                value='true'
                checked={gender === "true"}
                onChange={(e) => setAdmin(e.target.value)}
              />
              <Form.Check
                inline
                type="radio"
                label="User"
                id="gender-female"
                value="false"
                checked={gender === "false"}
                onChange={(e) => setAdmin(e.target.value)}
              />
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className='d-block text-center'>
        <Button variant="secondary"onClick={handleSubmit} >
        <span className="bi bi-check">save</span>
        </Button>
        <Button variant="secondary" onClick={handleClose}>
        <span class="btn-label"><i className="bi bi-x">close</i></span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProfileModal;
