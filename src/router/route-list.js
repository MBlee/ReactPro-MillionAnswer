import IndexPage from '../view/IndexPage'
import AnswerPage from '../view/AnswerPage'
import ScorePage from '../view/ScorePage'

const routes = [
	{name:'IndexPage',path:'/',component:IndexPage,exact:true},
	{name:'IndexPage',path:'/Index',component:IndexPage,exact:false},
	{name:'AnswerPage',path:'/Answer',component:AnswerPage,exact:false},
	{name:'ScorePage',path:'/Score',component:ScorePage,exact:false},
]
export default routes
