import React from 'react'
import {ChuckModel} from '../models/chuckModels.js'
import Backbone from 'backbone'
import ACTIONS from '../ACTIONS.js'
import STORE from '../STORE.js'
import IntroPage from './introPage.js'

var HomePage = React.createClass({
	componentWillMount() {
		ACTIONS.fetchChuck()
		STORE.on('dataUpdated', () => {
			this.setState(STORE.data)
		},
		//console.log(STORE.data.nameValue)

		)
	},

	getInitialState() {
 		return STORE.data
 	},

	render() {
		return (
			<div className="home-page">
				<h1>{`True ${this.state.nameValue} Facts`}</h1>
				<Chuck chuckCollection={this.state}/>
			</div>
			)
	}

})

var Chuck = (props) => {
	console.log(localStorage)
	console.log(props)
	var interim = props.chuckCollection.chuckMod.get('value')
	var repl = props.chuckCollection.nameValue
	if (interim) {
		var newString = interim.replace(/Chuck Norris/gi,repl)
		// STORE.save()
	}
	
	return (
		<div>
			<p>{newString}</p>
			<a href={`/#intro/`}>
				<p>Return to input a new Name</p>
			</a>
		</div>
	)
}

// var NewChuck = (props) => {
// 	console.log("this")
// 	return (
// 		<div>
// 			<p>new stuff goes here</p>
// 		</div>
// 	)
// }

	// getInitialState() {
 // 		var selectedOption = localStorage.getItem( 'SelectedOption' ) || 1;
 // 	   		return {
 //        		selectedOption: selectedOption
 //    	};
	// }

	// setSelectedOption(option) {
 //    	localStorage.setItem( 'SelectedOption', option );
 //    	this.setState( { selectedOption: option } );
	// }
export default HomePage