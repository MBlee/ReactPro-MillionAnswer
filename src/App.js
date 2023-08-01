import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { useEffect, useState,createContext } from 'react'
import axios from 'axios'


import IndexRoute from './router'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'

import {scoreContext} from './store/context'

function App(props) {
	const [score, setScore] = useState(0)
    return (
    	<scoreContext.Provider value={{score:0}}>
	        <div className="App"> 
	        	<IndexRoute />
	        </div>
        </scoreContext.Provider>
    );
}

export default connect(res => res)(App);