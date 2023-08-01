import React from 'react'
import {withRouter,useHistory} from 'react-router-dom'
function BackHome(props) {
	const history = useHistory()
	return (
		<div className='BackHome' onClick={
			()=>{history.push('/')}
		}>
			◀◀◀◀
		</div>
	)
}
export default BackHome