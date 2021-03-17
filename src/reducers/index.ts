import { combineReducers } from "redux";
import selectedUser from './selectedUserReducer';
import addToFavorite from './addToFavoriteReducer';

const rootReducer = combineReducers({
    selectedUser,
    addToFavorite
});

export default rootReducer;