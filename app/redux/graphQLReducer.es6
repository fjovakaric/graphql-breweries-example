import actionTypes from './constants.es6';

const initialState = function() {
    return 0
};

function isSuccessAction(type) {
    return (type.indexOf('_SUCCESS') > 0);
}

export default function graphQLReducer($$state = initialState(), action) {
    if (action.type == actionTypes.GRAPHQL_ERROR) {
        console.log(action.error);
    }

    if (action.type == actionTypes.BEGIN_GRAPHQL_CALL) {
        return $$state + 1;
    } else if (isSuccessAction(action.type) ||
        action.type == actionTypes.GRAPHQL_ERROR) {
        return $$state - 1;
    } else {
        return $$state;
    }
}