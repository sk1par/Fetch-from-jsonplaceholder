import { combineReducers } from "redux";
import selectedUser from './selectedUserReducer';
import addToFavorite from './addToFavoriteReducer';
import setAuthReducer from './setAuthReducer';

const rootReducer = combineReducers({
    selectedUser,
    addToFavorite,
    setAuthReducer
});

export default rootReducer;