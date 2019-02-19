// src/js/actions/index.js

import { ADD_ARTICLE } from "../constants/action-types";
import { LOGIN_USER } from "../constants/action-types";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};

export function loginUser(payload) {
    return { type: LOGIN_USER, payload }
}

// So, the type property is nothing more than a string. The reducer will use that string to determine how to calculate the next state.

// Since strings are prone to typos and duplicates it’s better to have action types declared as constants. 
// This approach helps avoiding errors that will be difficult to debug.