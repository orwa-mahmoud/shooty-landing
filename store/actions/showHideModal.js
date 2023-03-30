import * as actionTypes from './actionsTypes';

//  const showLoginModal = () => {
//     return { 
//         type: actionTypes.SHOW_LOGIN_MODAL 
//     }
// };
 const showLoginModal = () => ({ type: actionTypes.SHOW_LOGIN_MODAL });
 const showSignupModal = () => ({ type: actionTypes.SHOW_SIGNUP_MODAL });
 const showForgotEmailModal = () => ({ type: actionTypes.SHOW_FORGOT_EMAIL_MODAL });
 const showChangePasswordModal = () => ({ type: actionTypes.SHOW_CHANGE_PASSWORD_MODAL });
 const showVirifyEmailModal = () => ({ type: actionTypes.SHOW_VIRIFY_EMAIL_MODAL });
 const showResetPasswordLinkEmailModal = () => ({ type: actionTypes.SHOW_RESET_PASSWORD_LINK_EMAIL_MODAL });

 const hideLoginModal = () => ({ type: actionTypes.HIDE_LOGIN_MODAL });
 const hideSignupModal = () => ({ type: actionTypes.HIDE_SIGNUP_MODAL });
 const hideForgotEmailModal = () => ({ type: actionTypes.HIDE_FORGOT_EMAIL_MODAL });
 const hideChangePasswordModal = () => ({ type: actionTypes.HIDE_CHANGE_PASSWORD_MODAL });
 const hideVirifyEmailModal = () => ({ type: actionTypes.HIDE_VIRIFY_EMAIL_MODAL });
 const hideResetPasswordLinkEmailModal = () => ({ type: actionTypes.HIDE_RESET_PASSWORD_LINK_EMAIL_MODAL });



const showHideModalActions = {
    showLoginModal,
    showSignupModal,
    showForgotEmailModal,
    showChangePasswordModal,
    showVirifyEmailModal,
    showResetPasswordLinkEmailModal,
    hideLoginModal,
    hideSignupModal,
    hideForgotEmailModal,
    hideChangePasswordModal,
    hideVirifyEmailModal,
    hideResetPasswordLinkEmailModal
 }
 export default showHideModalActions