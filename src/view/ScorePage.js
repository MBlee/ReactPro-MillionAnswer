import React,{useContext} from 'react'
import {scoreContext} from '../store/context'
import BackHome from '../common/component/BackHome'

export default function ScorePage() {
	const context = useContext(scoreContext)
	const {score} = context
	return (

		<div className='ScorePage'>
			<BackHome />
			<h2>{score}</h2>
			<p>总体得分</p>
		</div>

	)
}