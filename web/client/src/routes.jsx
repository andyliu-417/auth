import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './containers/App/App';
import Login from './containers/Login/Login';

class Routes extends React.Component{
	render(){
		return (
			<BrowserRouter>
				<div>
					{/* <App></App> */}
					<Switch>
						<Route path='/login' component={Login}></Route>
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

export default Routes;
