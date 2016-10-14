import * as breweriesActions from './breweries/breweriesActions.es6';
import * as graphqlActions from './graphql/graphqlActions.es6';
import * as uiActions from './ui/uiActions.es6';

export default Object.assign(
    {},
    breweriesActions,
    graphqlActions,
    uiActions
);