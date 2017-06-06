import Backbone from 'backbone'

export var ChuckModel = Backbone.Model.extend({
	url: 'https://api.chucknorris.io/jokes/random'
})