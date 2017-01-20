//Standard Imports
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import { Provider } from "react-redux";

//Local Imports
import store from "./store.js";
import App from "./components/App/App.js";
import Login from "./components/Login/Login.js";
import Shop from "./components/Shop/Shop.js";

document.addEventListener ("DOMContentLoaded", () => {
	const reactNode = document.getElementById("react-node");

	if(reactNode) {
		ReactDOM.render(
			<Provider store={ store }>
				<Router history={browserHistory}>
					<Route path="/" component={ App }>
						<Route path="/login" component={ Login }/>
						<Route path="/shop" component={ Shop }/>
					</Route>
				</Router>
			</Provider>
		, reactNode);
	}	
});
