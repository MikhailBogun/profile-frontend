import axios from "axios";
const server_url = "http://127.0.0.1:3000/api/v1/user";


export const HandleSubmitUser = (user) => {
  // TODO: Add logic to handle form submissio

  // Send POST request to server to create new user
  return axios.post(server_url, user)
    .then(response => {
      console.log('Success:', response);
      // var data_json = JSON.parse(JSON.stringify(response.data))
      localStorage.setItem('token', JSON.stringify(response.data));
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

