import * as actionTypes from './actionsTypes';

export const register = (data) => {
    return {
        type: actionTypes.REGISTER,
        payload: data
    }
}

export const login = (data) => {
    return {
        type: actionTypes.LOGIN,
        payload: data
    }
}

const authActions = {
    register,
    login,
}


export default authActions