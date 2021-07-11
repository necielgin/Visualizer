import React from 'react';
import Home from './pages/home' ;
import './index.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import SortingPage from './pages/sorting/sorting';
import index from './pages/pathfinder/index'
const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/sorting" component={SortingPage} exact/>
				<Route path="/pathfinder" component={index} exact/>
			</Switch>
		</Router>
	)
}

export default App
