// src/js/actions/index.js

import { ADD_ARTICLE, HANDLE_LOGIN, SIGNUP_USER, LOGOUT_USER } from "../constants/action-types";
import axios from "axios";

export const logoutUser = () => {
    return { type: LOGOUT_USER }
};

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};

// LOGIN ACTION 
export function loginUser(loginState) {
    return (dispatcher) => {
        axios.post(`http://4b067828.ngrok.io/login`, loginState).then((user) => {
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

// SIGNUP USER ACTION 
export function signupUser(signupState) {
    console.log("in signup user function of actions");
    
    return (dispatcher) => {
        axios.post(`http://4b067828.ngrok.io/signup`, signupState).then((user) => {
            console.log("saved user to backend", user);
            dispatcher(handleSignup(user.data.token));
        }).catch(console.err);
    }

}

export const handleSignup = (token) => {
    console.log("in dispatched handleSignup");
    return {
        type: SIGNUP_USER, 
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