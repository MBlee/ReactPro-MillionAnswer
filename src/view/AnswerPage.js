import { useEffect,useState,useContext} from 'react'
import {scoreContext} from '../store/context'
import { connect } from 'react-redux'

import { setAnswer } from '../store/action'
import fn from '../store/reducer/asyncMethod'
import AnswerCard from '../common/component/AnswerCard'

function AnswerPage(props) {
	const context = useContext(scoreContext)
	const [doneCounter, setDoneCounter] = useState(0)
    useEffect(() => {
        (async () => {
            const answer = await fn.getAnswer(2)
            props.dispatch(setAnswer(answer))
            context.score = 0
        })()
    }, [])
	return (
		<div>
			{(props.answers && props.answers.length > 0)?
				(props.answers.map((answer, index) => {
		            return (
		                <AnswerCard key={index} 
		                answer={answer} 
		                addScore={(num)=>{
		                	context.score = context.score+num
		                	console.log('得分：',context.score);
		                	setDoneCounter(
		                			counter=>{
		                				if (doneCounter == 9) {
		                					setTimeout(()=>{
		                						props.history.push('/Score')
		                					},1000)
		                				}
		                				return	doneCounter+1
		                			}
		                		)

		                }}/>
		            )
		        }))
				:(<h2>加载中....✈✈✈</h2>)}
		</div>
	)
}
export default connect(res=>res)(AnswerPage)