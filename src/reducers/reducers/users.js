import { USER } from "../constants/user";

const INITIAL_STATE = {
  user: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
};
