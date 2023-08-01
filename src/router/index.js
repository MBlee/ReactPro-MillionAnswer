import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'

import React from 'react'

import routes from './route-list'

export default function IndexRoute() {
	return (
		<Router>
			<Switch>
				{routes.map(
					(route,index)=>{
						return <Route key={index} {...route}></Route>
					}
				)}
			</Switch>
		</Router>
	)
}