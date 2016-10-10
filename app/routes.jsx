import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App/App.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import GraphiQLPage from './pages/GraphiQLPage/GraphiQLPage.jsx';

export default (
    <Route>
        <Route component={App}>
            <Route path="/" component={HomePage}/>
        </Route>

        <Route path="/graphiql" component={GraphiQLPage}/>
    </Route>
);