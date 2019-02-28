// src/js/actions/index.js

import { HANDLE_LOGIN, SIGNUP_USER, LOGOUT_USER, HANDLE_SETTINGS, REQUEST_CLUB, VIEW_ALL_CLUBS } from "../constants/action-types";
import axios from "axios";

export const logoutUser = () => {
    return { type: LOGOUT_USER };
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

export function requestClub(userData, clubData) {
    console.log("here");
    console.log("userData:", userData);    
    console.log("clubData:", clubData);
    return (dispatcher) => {
        console.log("in return");
        axios.post(`/requestClub`, {userData, clubData}).then(res => {
            console.log("res:", res.data);
            dispatcher(handleRequestClub(res.data.user));
        }).catch(console.err);
    };
};

export const handleRequestClub = (user) => {
    return {
        type: REQUEST_CLUB,
        payload: user
    };
};

export function viewAllClubs(userData) {
    return (dispatcher) => {
        console.log("userDataa:", userData);
        axios.post(`/getAllClubs`, userData).then((res) => {
            console.log("res.data.clubs:", res.data.clubs);
            dispatcher(handleAllClubs(res.data.clubs));
        }).catch(console.err);
    };
};

export const handleAllClubs = (clubs) => {
    return {
        type: VIEW_ALL_CLUBS,
        payload: clubs
    };
};
