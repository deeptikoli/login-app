//import { createStore } from 'redux';
import userData from '../../../users.json';
import Constants from '../../constants/constants';

// Locate
let user = JSON.parse(localStorage.getItem("currentUser"));
let currentUser = user ? user : null;
let initalState = {...currentUser, isUserAuthenticated: !!currentUser, users: userData};

function Reducer(state = initalState, action) {
    switch (action.type) {
        case 'VALIDATE_USER':
            let newState = {
                user: action.payload,
                isUserAuthenticated: !!action.payload
            }
            localStorage.setItem('currentUser',JSON.stringify(newState))     
            return newState;
            
        case 'LOGOUT':
            localStorage.removeItem('currentUser')
            return {
                user: null,
                isUserAuthenticated: false  
            }
        default: return state;
    }
}

export default Reducer;