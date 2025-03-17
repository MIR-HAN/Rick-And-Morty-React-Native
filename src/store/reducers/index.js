import { combineReducers } from "redux";
import characterReducer from "./charectersReducer";


const rootReducer = combineReducers({

    characters:characterReducer,
    
})

export default rootReducer;