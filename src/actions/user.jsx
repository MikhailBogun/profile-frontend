import axios from "axios";
import Cookies from 'universal-cookie';

const server_url = "http://127.0.0.1:3000/api/v1/user";
const cookies = new Cookies();



export const HandleSubmitUser = (user) => {
  // TODO: Add logic to handle form submissio

  // Send POST request to server to create new user
  return axios.post(server_url, user)
    .then(response => {
      console.log('Success:', response);
      // var data_json = JSON.parse(JSON.stringify(response.data))
      cookies.set('jwt_access', JSON.stringify(response.data.token))
      cookies.set('user_id', JSON.stringify(response.data.user.id))
      cookies.set('username', JSON.stringify(response.data.user.username))

      axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.stringify(response.data)}`;

      return true;
      // TODO: Redirect user to dashboard or login page
    })
    .catch(error => {
      console.error('Error:', error);
      return false;
      // TODO: Handle error case
    });
}

