import * as actionTypes from '../actions/actionsTypes';
const initialState = {
    showLoginModal: false,
    showSignupModal: false,
    showForgotEmailModal: false,
    showVirifyEmailModal: false,
}; //Initial state of the counter

const showHideModal = (state= initialState,action) => {
    switch (action.type) {
        
        // show modal
        case 'SHOW_LOGIN_MODAL':
            return {...state, showLoginModal: true,};
        case 'SHOW_SIGNUP_MODAL':
            return {...state, showSignupModal: true,};
        case 'SHOW_FORGOT_EMAIL_MODAL':
            return {...state, showForgotEmailModal: true,};  
        case 'SHOW_VIRIFY_EMAIL_MODAL':
            return {...state, showVirifyEmailModal: true,};

        // hide modal 
        case 'HIDE_LOGIN_MODAL':
            return {...state, showLoginModal: false,};
        case 'HIDE_SIGNUP_MODAL':
            return {...state, showSignupModal: false,};
        case 'HIDE_FORGOT_EMAIL_MODAL':
            return {...state, showForgotEmailModal: false,}; 
        case 'HIDE_VIRIFY_EMAIL_MODAL':
            return {...state, showVirifyEmailModal: false,};
        default:
            return state
    }
}

export default showHideModal
