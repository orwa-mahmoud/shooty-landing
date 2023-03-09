import { combineReducers } from 'redux';
import showHideModal from '../reducers/showHideModal';

const rootReducer = combineReducers({
    showHideModal: showHideModal,
});

export default rootReducer;