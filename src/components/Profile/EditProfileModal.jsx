import React, {useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from "axios";


const EditProfileModal = ({ show, profile, handleClose, url}) => {

  const [name, setName] = useState(profile.name);
  const [gender, setGender] = useState(profile.gender);
  const [birthdate, setBirthday] = useState(profile.birthdate);
  const [city, setCity] = useState(profile.city);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.put(url, {  data: {
      edit_data: {
        id: profile.id,
        name: name,
        gender: gender,
        birthdate: birthdate,
        city: city
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

          <Form.Group controlId="formGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option>Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBirthday">
            <Form.Label>Birthday</Form.Label>
            <Form.Control
              type="date"
              value={birthdate}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
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
