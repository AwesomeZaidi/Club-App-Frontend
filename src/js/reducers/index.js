// src/js/reducers/index.js

import { HANDLE_LOGIN, SIGNUP_USER, LOGOUT_USER, HANDLE_SETTINGS, REQUEST_CLUB, VIEW_ALL_CLUBS, GET_LEADER_CLUB } from "../constants/action-types";

const initialState = {
  token: "",
  user: "",
  clubs: [],
  leaderClub: ""
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case HANDLE_LOGIN:
      return {...state, user: action.payload}
    case SIGNUP_USER:
      return {...state, token: action.token_payload, user: action.user_payload}
    case LOGOUT_USER:
      return {...state, user: "", token: "", clubs: []}
    case HANDLE_SETTINGS:
      return {...state, user: action.payload}
    case REQUEST_CLUB:
      return {...state, user: action.payload}
    case VIEW_ALL_CLUBS:
      return {...state, clubs: action.payload}
    case GET_LEADER_CLUB:
      return {...state, leaderClub: action.payload}
    default: 
        return state;
  }
};


export default rootReducer;
