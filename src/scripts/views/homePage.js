import React from 'react'
import {ChuckModel} from '../models/chuckModels.js'
import Backbone from 'backbone'
import ACTIONS from '../ACTIONS.js'
import STORE from '../STORE.js'
import IntroPage from './introPage.js'

var HomePage = React.createClass({
	componentWillMount : function() {
		ACTIONS.fetchChuck()
		STORE.on('dataUpdated', () => {
			this.setState(STORE.data)
		})
	},

	getInitialState : function() {
		return STORE.data
	},

	render: function() {
		console.log(this.state.nameValue)
		return (
			<div className="home-page">
				<h1>{`True {this.state.nameValue} Facts`}</h1>
				<Chuck chuckCollection={this.state}/>
			</div>
			)
	}

})

var Chuck = (props) => {
	var interim = props.chuckCollection.chuckMod.get('value')
	var repl = props.chuckCollection.nameValue
	if (interim) {
		var newString = interim.replace(/Chuck Norris/gi,repl)
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

export default HomePage