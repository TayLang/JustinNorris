import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import HomePage from './views/homePage'
import IntroPage from './views/introPage'
import {ChuckModel} from './models/chuckModels'




const app = function() {
  var ChuckRouter = Backbone.Router.extend({
		routes: {
			'intro': 'handleIntro',
			'home': 'handleHome',
			'*defaultRoute': 'handleRedirect',
		},

		handleIntro: function() {
			ReactDOM.render(<IntroPage />, document.querySelector('.container'))
		},

		handleHome: function() {
			ReactDOM.render(<HomePage />, document.querySelector('.container'))
		},
		
		handleRedirect: function() {
			location.hash = 'intro'
		},
	})
	new ChuckRouter
	Backbone.history.start()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..