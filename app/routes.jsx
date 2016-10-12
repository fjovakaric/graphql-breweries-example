import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App/App.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import BreweriesPage from './pages/BreweriesPage/BreweriesPage.jsx';
import GraphiQLPage from './pages/GraphiQLPage/GraphiQLPage.jsx';

export default (
    <Route>
        <Route component={App}>
            <Route path="/" component={HomePage}/>
            <Route path="/breweries" component={BreweriesPage}/>
        </Route>

        <Route path="/graphiql" component={GraphiQLPage}/>
    </Route>
);