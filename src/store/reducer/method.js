import {SETANSWER} from '../constant'
const fn = {
	[SETANSWER]:(state,action)=>{
		const {answer} = action
		return answer
	}
}
export default fn