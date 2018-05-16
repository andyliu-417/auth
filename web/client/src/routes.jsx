import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './containers/Login/Login';

class Routes extends React.Component{
	render(){
		return (
			<BrowserRouter>
				<div>
					<Switch>
						<Route path='/login' component={Login}></Route>
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

export default Routes;
