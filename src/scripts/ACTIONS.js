import {ChuckModel} from './models/chuckModels.js'
import STORE from './STORE'

var ACTIONS = {
	fetchChuck : function() {
		var chuckInstance = new ChuckModel()
		var promise = chuckInstance.fetch({
			data:{
				includes: 'value'
			}
		})
		promise.then(() => {
			STORE.set({
				chuckMod : chuckInstance
			})
		})
	}
}

export default ACTIONS