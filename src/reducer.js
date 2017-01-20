import { combineReducers } from "redux";

import cart from "./ducks/cartDuck.js";
import user from "./ducks/userDuck.js";

export default combineReducers( {
	cart,
	user
});