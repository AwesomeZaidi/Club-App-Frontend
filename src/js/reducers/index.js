// src/js/reducers/index.js

// import { combineReducers } from "redux";
// import authReducer from "./authReducer";
// import errorReducer from "./errorReducer";


// export default combineReducers({
//   auth: authReducer,
//   errors: errorReducer
// });

import { ADD_ARTICLE } from "../constants/action-types";
import { LOGIN_USER } from "../constants/action-types";


const initialState = {
  articles: [],
  user: "",
  remoteArticles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }

  if (action.type === LOGIN_USER) {
    // console.log("state:", state);
    // console.log("action.payload:", action.payload);
    
    return Object.assign({}, state, {
      user: action.payload
    });
  }
  return state;
};


export default rootReducer;

// the initial state is left utterly untouched.
// The initial articles array doesn’t change in place.
// The initial state object doesn’t change as well. The resulting state is a copy of the initial state.