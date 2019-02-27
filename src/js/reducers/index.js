// src/js/reducers/index.js

// import { combineReducers } from "redux";
// import authReducer from "./authReducer";
// import errorReducer from "./errorReducer";


// export default combineReducers({
//   auth: authReducer,
//   errors: errorReducer
// });

import { HANDLE_LOGIN, SIGNUP_USER, LOGOUT_USER, HANDLE_SETTINGS } from "../constants/action-types";


const initialState = {
  token: "",
  user: ""
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case HANDLE_LOGIN: 
      return {...state, token: action.token_payload, user: action.user_payload}
    case SIGNUP_USER:
      return {...state, token: action.token_payload, user: action.user_payload}
    case LOGOUT_USER:
      return {...state, user: "", token: ""}
    case HANDLE_SETTINGS:
      return {...state, user: action.payload}
    default: 
        return state;
  }
};


export default rootReducer;
