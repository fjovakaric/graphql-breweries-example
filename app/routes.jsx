import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App/App.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
// import MoviesPage from './pages/movies/movies.container';
// import GraphiQLPage from './pages/graphiql/graphiql.container';

export default (
    <Route>
        <Route component={App}>
            <Route path="/" component={HomePage}/>
        </Route>
    </Route>
);