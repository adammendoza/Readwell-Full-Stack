import { RECEIVE_CURRENT_USER,
         LOGOUT_CURRENT_USER,
         RECEIVE_ERRORS } from '../actions/session_actions';

const _nullUser = {
  id: null
}

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.user.id }
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
}
