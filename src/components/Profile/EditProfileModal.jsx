import React, {useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from "axios";
import { useForm } from "react-hook-form";
import Cookies from 'universal-cookie';




const EditProfileModal = ({ show, profile, handleClose, url, isUpdating}) => {
  console.log('IsUpda - ', isUpdating)

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const [gender, setGender] = useState(isUpdating ? profile.gender : "male");

  const onSubmit = (data) => {
    data.gender = gender;
    setSubmittedData(data);
    isUpdating ? updateProfile(data) : createProfile(data)
  };

  const updateProfile = (edit_data) => {
    edit_data.id  = profile.id

    let current_url = url + '/' + profile.id;
    axios.put(current_url , {  data: {
      edit_data: edit_data
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
  }

  const createProfile = (edit_data) => {
    let current_url = url;
    axios.post(current_url , {  data: {
      edit_data: edit_data
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
  }

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 1);
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 100);

  return (
    <Modal show={show} onHide={handleClose} centered className=' modal-sm'>
      <Modal.Header closeButton>
        <Modal.Title >Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
          <Form.Group controlId="formName">
            <Form.Label className="col-sm-3 col-form-label text-sm-begin" >name</Form.Label>
            <Form.Control
              type="text"
              defaultValue = { isUpdating ? profile.name : "" }
              placeholder="Enter name"
              {...register("name", { required: true, minLength: 3, maxLength: 50 })}
              isInvalid={errors.name}
            />

            {errors.name && (
              <Form.Control.Feedback type="invalid">
                {errors.name.type === "required" && "Name is required"}
                {errors.name.type === "minLength" && "Name must be at least 3 characters"}
                {errors.name.type === "maxLength" && "Name must be less than 50 characters"}
              </Form.Control.Feedback>
            )}
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
              defaultValue = { isUpdating ? profile.birthdate : null }
              {...register("birthdate", { required: true })} max={maxDate.toISOString().slice(0,10)} min={minDate.toISOString().slice(0,10)} 
              isInvalid={errors.birthdate}
             />

              {errors.birthdate && (
              <Form.Control.Feedback type="invalid">
                {errors.birthdate.type === "required" && "Birthdate is required"}
                {errors.birthdate.type === "max" && "Birthdate must be within the last 100 years"}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group controlId="formCity">
            <Form.Label className="col-sm-3 col-form-label" >city</Form.Label>
            <Form.Control
              type="text"
              defaultValue = {isUpdating ? profile.city : "" }
              placeholder="Enter city"
              {...register("city", {
                required: "City is required",
                minLength: { value: 3, message: "City name must be at least 3 characters" },
                maxLength: { value: 50, message: "City name must be less than 50 characters" },
              })}
              isInvalid={errors.city}
            />
            <Form.Control.Feedback type="invalid">
              {errors.city && errors.city.message}
            </Form.Control.Feedback>
            
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className='d-block text-center'>
        <Button variant="secondary"onClick={handleSubmit(onSubmit)} >
        <span className="bi bi-check">      {isUpdating ? "Save" : "Create"}  </span>
        </Button>
        <Button variant="secondary" onClick={handleClose}>
        <span className="btn-label"><i className="bi bi-x">close</i></span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProfileModal;
