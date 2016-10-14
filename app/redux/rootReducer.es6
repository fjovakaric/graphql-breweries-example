import { combineReducers } from 'redux';

import graphql from './graphql/graphQLReducer.es6';
import breweries from './breweries/breweriesReducer.es6';

const rootReducer = combineReducers({
    graphql,
    breweries
});

export default rootReducer;