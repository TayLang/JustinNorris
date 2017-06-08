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
	}

	handleSubmit(event) {
		//alert('a name was submitted: ' + this.state.nameValue);
		//ACTIONS.setChuck(this.state.nameValue)
		location.hash = "home"
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
					<input type="text" value={this.state.nameValue} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>	
		);
	}
}

export default IntroPage