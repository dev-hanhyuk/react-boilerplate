import axios from 'axios';
import { FETCH_USER_FROM_SERVER } from '_actions';

export const fetchUserFromServer = (email, password) => dispatch =>
  axios.post('/api/user/login', { email, password })
    .then(response => {
      const user = response.data;
      return dispatch({ type: FETCH_USER_FROM_SERVER, user })
    })
    .catch(err => console.error(err))
