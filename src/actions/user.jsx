import axios from "axios";
import Cookies from 'universal-cookie';

const cookies = new Cookies();



export const HandleSubmitUser = (user) => {
  let current_url = process.env.REACT_APP_BACKEND_URL + 'user';

  return axios.post(current_url, user)
    .then(response => {
      console.log('Success:', response);
      cookies.set('jwt_access', JSON.stringify(response.data.token))
      cookies.set('user_id', JSON.stringify(response.data.user.id))
      cookies.set('username', JSON.stringify(response.data.user.username))

      axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.stringify(response.data)}`;

      return true;
    })
    .catch(error => {
      console.error('Error:', error);
      return false;
    });
}

