// src/js/actions/index.js

import { HANDLE_LOGIN, SIGNUP_USER, LOGOUT_USER, HANDLE_SETTINGS } from "../constants/action-types";
import axios from "axios";

export const logoutUser = () => {
    return { type: LOGOUT_USER }
};

// LOGIN ACTION 
export function loginUser(loginState) {
    return (dispatcher) => {
        axios.post(`/login`, loginState).then((res) => {
            console.log("res.data.user", res.data.user);
            dispatcher(handleLogin(res.data.user, res.data.token)); // THUNKED IT!
        }).catch(console.err);
    };
};

export const handleLogin = (user, token) => {
    return {
        type: HANDLE_LOGIN,
        user_payload: user,
        token_payload: token
    };
};

// SIGNUP USER ACTION 
export function signupUser(signupState) {
    return (dispatcher) => {
        axios.post(`/signup`, signupState).then((res) => {
            dispatcher(handleSignup(res.data.user, res.data.token));
        }).catch(console.err);
    };
};

export const handleSignup = (user, token) => {
    return {
        type: SIGNUP_USER, 
        user_payload: user,
        token_payload: token
    };
};

// UPDATE SETTINGS ACTION 
export function updateSettings(userFormState, token) {
    return (dispatcher) => {
        axios.put(`/settings`, {userFormState, token}).then((res) => {
            console.log("res:", res.data.user);
            dispatcher(handleSettings(res.data.user));
        }).catch(console.err);
    };
};

export const handleSettings = (user) => {
    return {
        type: HANDLE_SETTINGS,
        payload: user
    };
};
