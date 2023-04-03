import React, { useEffect, useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Card } from "react-bootstrap";

import "./dashboard.css"


function DashboardInfo() {
  const navigate = useNavigate();

  const [dashboardInfo, setdashboardInfo] = useState({});
  let current_url = process.env.REACT_APP_BACKEND_URL + 'dashboard';

  const getDashboard = () => {
    axios.get(current_url)
    .then(response => {
      console.log('Success:', response);
      setdashboardInfo(response.data)

    })
    .catch(error => {
      console.error('Error:', error);
      alert(error);
      navigate('/users');
    });
  }

  useEffect(() => {
    getDashboard()
  }, []);


  return (
    <div className="card-container">
      <div className="card-column">
          <Card className="flex-column text-center ">
          <Card.Body>
            <Card.Title>Users: </Card.Title>
            <Card.Text>{dashboardInfo.count_user}</Card.Text>
          </Card.Body>
        </Card>
    </div>
    <div className="card-column text-center ">

        <Card className="flex-column">
          <Card.Body>
            <Card.Title>Profiles: </Card.Title>
            <Card.Text>{dashboardInfo.count_profiles}</Card.Text>
          </Card.Body>
        </Card>
    </div>
    <div className="card-column">

        <Card className="flex-column text-center">
          <Card.Body>
            <Card.Title>Profiles over 18 years old:  </Card.Title>
            <Card.Text>{dashboardInfo.count_profiles_with_age}</Card.Text>
          </Card.Body>
        </Card>
    </div>
   </div>
  );
}

export default DashboardInfo;