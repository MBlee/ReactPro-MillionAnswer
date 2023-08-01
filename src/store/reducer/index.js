import {combineReducers} from 'redux'
import fn from './method'
function answers(state=[],action) {
	const method = fn[action.type]
	if (method) {
		state = method(state,action)
	}
	return state	
}
export default combineReducers({answers});