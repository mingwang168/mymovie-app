import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "../components/nav";
import Home from "../components/home";
import Footer from "../components/footer";
import Detail from '../components/detail';
import PageNotFound from '../components/pageNotFound';
import About from '../components/about';
import MyFavourites from '../components/myfavourites';
import MyRated from '../components/myrated';
import Discover from '../components/discover';

const AppRouter = () => (
	<Router>
		<div className="wrapper">
			<Nav />
			<Switch>
				<Route path="/" exact><Home /></Route>
                <Route path="/detail" component={Detail} />
                <Route path="/discover"><Discover /></Route>
				<Route path="/about"><About /></Route>
                <Route path="/myfavourites"><MyFavourites /></Route>
                <Route path="/myrated"><MyRated /></Route>
				<Route><PageNotFound /></Route> 
			</Switch>
			<Footer />
		</div>
	</Router>
);

export default AppRouter;
