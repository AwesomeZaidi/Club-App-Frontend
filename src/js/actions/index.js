// src/js/actions/index.js

import { ADD_ARTICLE, HANDLE_LOGIN, LOGOUT_USER } from "../constants/action-types";
import axios from "axios";

export const logoutUser = () => {
    return { type: LOGOUT_USER }
};

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};

// action 
export function loginUser(loginState) {
    return (dispatcher) => {
        axios.post(`http://4ee12370.ngrok.io/login`, loginState).then((user) => {
            dispatcher(handleLogin(user.data.token)); // THUNKED IT!
        }).catch(console.err);
    }

}
// const objCopy = JSON.parse(JSON.stringify(obj))
export const handleLogin = (token) => {
    return {
        type: HANDLE_LOGIN, 
        payload: token
    }
}

// our new action creator.
export function getData() {
    return function(dispatch) {
        return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "DATA_LOADED", payload: json }); // and thats' redux-thunk!
            // return { type: "DATA_LOADED", payload: json };
        });
    }
}

// So, the type property is nothing more than a string. The reducer will use that string to determine how to calculate the next state.

// Since strings are prone to typos and duplicates it’s better to have action types declared as constants. 
// This approach helps avoiding errors that will be difficult to debug.