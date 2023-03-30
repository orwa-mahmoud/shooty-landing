
import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    user: [],
    token: '',
    resetPasswordEmail: '',
    changePasswordData:[]
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER:
            return {
                ... state,
                user: action.payload.user,
                token: action.payload.token,
            }

        case actionTypes.LOGIN:
            return {
                ... state,
                user: action.payload,
            } 

        case actionTypes.RESET_PASSWORD_EMAIL:
            return {
                ... state,
                resetPasswordEmail: action.payload,
            } 
        case actionTypes.CHANGE_PASSWORD_DATA:
            return {
                ... state,
                changePasswordData: action.payload,
            } 
            
        default: 
            return state    
    }
}

export default auth;
