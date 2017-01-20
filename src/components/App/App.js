import React from "react";
import NavBar from '../NavBar/NavBar.js';

export default class App extends React.Component {
	render() {
		<div>
			<NavBar/>
			{ this.props.children }
		</div>		
	}
}