import {ChuckModel} from './models/chuckModels.js'
import STORE from './STORE'
import IntroPage from './views/introPage'
import HomePage from './views/homePage'

var ACTIONS = {
	fetchChuck : function(nameInput) {
		var chuckInstance = new ChuckModel()
		var promise = chuckInstance.fetch({
			data:{
				includes: 'value'
			}
		})
		promise.then(() => {
			STORE.set({
				chuckMod : chuckInstance,
			})
		})
	},

	// setChuck : function(nameInput) {
	// 	STORE.set({
	// 		nameValue : nameInput
	// 	})
	// }
}

export default ACTIONS