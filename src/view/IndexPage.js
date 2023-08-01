import React from 'react'
import {Link} from 'react-router-dom'
export default function IndexPage() {
	return (
		<div className='IndexPage' >
			<Link className='route-link' to={'/Answer'}>百万答题</Link>
			<Link className='route-link' to={'/Score'}>答题得分</Link>
		</div>
	)
}