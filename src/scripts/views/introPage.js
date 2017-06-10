import React from 'react'
import {ChuckModel} from '../models/chuckModels.js'
import Backbone from 'backbone'
import ACTIONS from '../ACTIONS.js'
import STORE from '../STORE.js'

class IntroPage extends React.Component {
	componentWillMount() {
		STORE.on('dataUpdated', () => {
			this.setState(STORE.data)
		})
	}

	getInitialState() {
		return STORE.data
	}

	constructor(props) {
		super(props);
		this.state = {nameValue: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		STORE.set({nameValue: event.target.value});
		localStorage.setItem('nameValue', JSON.stringify(event.target.value));
	}

	handleSubmit(event) {
		//alert('a name was submitted: ' + this.state.nameValue);
		//ACTIONS.setChuck(this.state.nameValue)
		location.hash = "home"
		event.preventDefault();
	}

	render() {
		console.log(localStorage)
		console.log(STORE.data)
		return (
			<div className="formDiv">
				<h1>Welcome to Custom Norris!</h1>
				<h2>Enter your Name here!</h2>
				<form onSubmit={this.handleSubmit}>
					<label>
						<input type="text" value={this.state.nameValue} onChange={this.handleChange} />
					</label>
					<input type="submit" value="Chuckify me!" />
				</form>	
			</div>
		);
	}
}

export default IntroPage