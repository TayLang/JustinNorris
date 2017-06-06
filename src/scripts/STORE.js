import Backbone from 'backbone'
import {ChuckModel} from './models/chuckModels.js'

var STORE = Object.assign({}, Backbone.Events, {
	data: {
		chuckMod: new ChuckModel(),
		currentChuck: "",
		nameValue: ""
	},
	set: function(obj) {
		this.data = Object.assign(this.data, obj)
		this.trigger('dataUpdated')
	},
	get: function(attribute) {
		return this.data[attribute]
	}
})

export default STORE