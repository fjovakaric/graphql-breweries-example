import { combineReducers } from 'redux';

import graphql from './redux/graphQLReducer.es6';
import breweries from './redux/breweriesReducer.es6';

const rootReducer = combineReducers({
    graphql,
    breweries
});

export default rootReducer;