// src/js/actions/index.js

import { HANDLE_LOGIN, SIGNUP_USER, LOGOUT_USER, HANDLE_SETTINGS, REQUEST_CLUB, VIEW_ALL_CLUBS, GET_LEADER_CLUB, HANDLE_JOIN, HANDLE_ERROR } from "../constants/action-types";
import axios from "axios";

export const logoutUser = () => {
    return { type: LOGOUT_USER };
};

// LOGIN ACTION 
export function loginUser(loginState) {
    return (dispatcher) => { // read more into dispatcher
        axios.post(`https://clubs-app-backend.herokuapp.com/login`, loginState).then((res) => {
            dispatcher(handleLogin(res.data.user)); // THUNKED IT!
        }).catch((err) => {
            dispatcher(handleError(true));
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
        payload: user,
        payload_error: false
    };
};

// SIGNUP USER ACTION 
export function signupUser(signupState) {
    return (dispatcher) => {
        axios.post(`https://clubs-app-backend.herokuapp.com/signup`, signupState).then((res) => {
            dispatcher(handleSignup(res.data.user));
        }).catch(console.err);
    };
};

export const handleSignup = (user) => {
    return {
        type: SIGNUP_USER,
        payload: user,
        payload_error: false
    };
};


export function joinClub(clubId) {
    console.log("clubId:", clubId);
    return (dispatcher) => {
        axios.post(`https://clubs-app-backend.herokuapp.com/club`, {clubId}).then((res) => {
            console.log("res.data:", res.data);
            dispatcher(handleJoin(clubId));
        }).catch(console.err);
    };
};

export const handleJoin = (clubId) => {
    return {
        type: HANDLE_JOIN,
        payload: clubId
    };
};

// UPDATE SETTINGS ACTION 
export function updateSettings(userFormState, token) {
    return (dispatcher) => {
        axios.put(`https://clubs-app-backend.herokuapp.com/settings`, {userFormState, token}).then((res) => {
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
        axios.post(`https://clubs-app-backend.herokuapp.com/requestClub`, {clubData}).then(res => {
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

// ADMIN: VIEWS ALL CLUBS REQUESTING TO JOIN
export function getAllClubsRequestingToJoin() {
    return (dispatcher) => {
        axios.get(`https://clubs-app-backend.herokuapp.com/getAllClubsRequestingToJoin`).then((res) => {
            dispatcher(handleAllClubs(res.data.clubs));
        }).catch(console.err);
    };
};

// for anyone: VIEWS ALL CLUBS
export function viewAllClubs() {
    return (dispatcher) => {
        axios.get(`https://clubs-app-backend.herokuapp.com/getAllClubs`).then((res) => {
            dispatcher(handleAllClubs(res.data.clubs));
        }).catch(console.err);
    };
};

export const handleAllClubs = (all_clubs) => {
    return {
        type: VIEW_ALL_CLUBS,
        payload: all_clubs
    };
};

// LEADER: GET THE LEADERS CLUB OBJECT
export function getClubLeaderClub() {
    return (dispatcher) => {
        axios.get(`https://clubs-app-backend.herokuapp.com/getClubLeaderClub`).then((res) => {
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