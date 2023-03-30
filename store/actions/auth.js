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

export const restPasswordEmail = (data) => {
    return {
        type: actionTypes.RESET_PASSWORD_EMAIL,
        payload: data
    }
}


export const setChangePasswordData = (data) => {
    return {
        type: actionTypes.CHANGE_PASSWORD_DATA,
        payload: data
    }
}

const authActions = {
    register,
    login,
    restPasswordEmail,
    setChangePasswordData,
}


export default authActions