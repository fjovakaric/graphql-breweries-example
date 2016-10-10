import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import configureStore from './configureStore.es6';
import routes from './routes.jsx';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

const store = configureStore();

render (
    <Provider store={store} >
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);