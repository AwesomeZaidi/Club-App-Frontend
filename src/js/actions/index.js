// src/js/actions/index.js

import { HANDLE_LOGIN, SIGNUP_USER, LOGOUT_USER, HANDLE_SETTINGS, REQUEST_CLUB, VIEW_ALL_CLUBS, GET_LEADER_CLUB, HANDLE_ERROR } from "../constants/action-types";
import axios from "axios";

export const logoutUser = () => {
    return { type: LOGOUT_USER };
};

// LOGIN ACTION 
export function loginUser(loginState) {
    return (dispatcher) => { // read more into dispatcher
        axios.post(`/login`, loginState).then((res) => {
            dispatcher(handleLogin(res.data.user)); // THUNKED IT!
        }).catch((err) => {
            console.log("err:", err);
            
            console.log("in the catchhh boiiii");
            
            dispatcher(handleError(true)); // THUNKED IT!
        });
    };
};  

// ACTION HANDLE Error
export const handleError = (error) => {
    return {
        type: HANDLE_ERROR,
        payload: error
    };
};

// ACTION CREATE handeLogin
export const handleLogin = (user) => {
    return {
        type: HANDLE_LOGIN,
        payload: user
    };
};

// SIGNUP USER ACTION 
export function signupUser(signupState) {
    return (dispatcher) => {
        axios.post(`/signup`, signupState).then((res) => {
            dispatcher(handleSignup(res.data.user));
        }).catch(console.err);
    };
};

export const handleSignup = (user) => {
    return {
        type: SIGNUP_USER,
        payload: user,
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

export function requestClub(clubData) {
    return (dispatcher) => {
        axios.post(`/requestClub`, {clubData}).then(res => {
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

// ADMIN: VIEWS ALL CLUBS
export function viewAllClubs() {
    return (dispatcher) => {
        axios.get(`/getAllClubs`).then((res) => {
            dispatcher(handleAllClubs(res.data.clubs));
        }).catch(console.err);
    };
};

export const handleAllClubs = (clubs) => {
    console.log("CLUBS:", clubs);
    return {
        type: VIEW_ALL_CLUBS,
        payload: clubs
    };
};

// LEADER: GET THE LEADERS CLUB OBJECT
export function getClubLeaderClub() {
    return (dispatcher) => {
        axios.post(`/getClubLeaderClub`).then((res) => {
            dispatcher(handleClubLeaderClub(res.data.club));
        }).catch(console.err);
    };
};

export const handleClubLeaderClub = (club) => {
    return {
        type: GET_LEADER_CLUB,
        payload: club
    };
};