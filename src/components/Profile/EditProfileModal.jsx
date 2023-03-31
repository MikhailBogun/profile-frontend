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
    let current_url = url + '/' + profile.id;
    axios.put(current_url , {  data: {
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
    <Modal show={show} onHide={handleClose} centered className=' modal-sm'>
      <Modal.Header closeButton>
        <Modal.Title >Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label className="col-sm-3 col-form-label text-sm-begin" >name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formGender">
            <Form.Label className="col-sm-3 col-form-label ">gender</Form.Label>
            <div className="text-center">
              <Form.Check
                inline
                type="radio"
                label="Male"
                name="gender"
                id="gender-male"
                value="male"
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)}
              />
              <Form.Check
                inline
                type="radio"
                label="Female"
                name="gender"
                id="gender-female"
                value="female"
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
          </Form.Group>

          <Form.Group controlId="formBirthday">
            <Form.Label className='col-sm-3 col-form-label text-sm-begin'>birthday</Form.Label>
            <Form.Control
              type="date"
              value={birthdate}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formCity">
            <Form.Label className="col-sm-3 col-form-label" >city</Form.Label>
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
