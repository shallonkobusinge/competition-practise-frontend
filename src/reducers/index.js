import { combineReducers } from "redux";
import usersReducer from '../reducers/userReducers'


const rootReducer = combineReducers({
    users: usersReducer
})

export default rootReducer;
