import { combineReducers } from 'redux';
import showHideModal from '../reducers/showHideModal';
import auth from './auth';

const rootReducer = combineReducers({
    showHideModal: showHideModal,
    auth:auth
});

export default rootReducer;