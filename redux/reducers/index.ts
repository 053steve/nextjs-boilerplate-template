import {combineReducers} from "redux";
import auth from "./auth";
import common from './common'


const rootReducer = combineReducers({
    common,
    auth
});

export default rootReducer;
