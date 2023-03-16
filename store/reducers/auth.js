
import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    user: [],
    token: '',
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
            
        default: 
            return state    
    }
}

export default auth;
