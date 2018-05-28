import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './containers/App/App';
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';

class Routes extends React.Component{
	render(){
		return (
			<BrowserRouter>
				<div>
					{/* <App></App> */}
					<Switch>
						<Route path='/login' component={Login}></Route>
						<Route path='/signup' component={Signup}></Route>
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

export default Routes;
