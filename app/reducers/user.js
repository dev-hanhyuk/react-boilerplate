import { FETCH_USER_FROM_SERVER } from '_actions';

const INITIAL_STATE = {
  email: '',
  password: ''
};


export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_FROM_SERVER: return action.user;
    default: return state;
  }
}