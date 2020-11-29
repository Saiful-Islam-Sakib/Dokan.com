import authReducer from "./auth.reducers";
import sellerReducer from "./seller.reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    seller: sellerReducer,
});

export default rootReducer;
