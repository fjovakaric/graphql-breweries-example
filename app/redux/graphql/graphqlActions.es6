import actionTypes from '../constants.es6';
import fetch from 'isomorphic-fetch';

export function beginGraphqlCall() {
    return {
        type: actionTypes.BEGIN_GRAPHQL_CALL
    }
}

export function graphqlError(error) {
    return {
        type: actionTypes.GRAPHQL_ERROR,
        error
    }
}

export function graphqlQuery(query, successAction) {
    return (dispatch) => {
        dispatch(beginGraphqlCall());

        fetch(window.location.origin + '/graphql', {
            method: 'post',
            headers: { 'Content-Type': 'application/graphql' },
            body: query
        }).then((response) => {
            return response.json();
        }).then((response) => {
            console.log(response.data);
            successAction(response.data);
        }).catch(err => {
            dispatch(graphqlError(err))
        })
    }
}

export function graphqlMutation(mutation, successAction) {
    return (dispatch) => {
        dispatch(beginGraphqlCall());

        fetch(window.location.origin + '/graphql', {
            method: 'post',
            headers: { 'Content-Type': 'application/graphql' },
            body: mutation
        }).then((response) => {
            response
                .json()
                .then(res => {
                    console.log(res.data);
                    successAction(res.data);
                });
        }).catch(err => {
            dispatch(graphqlError(err))
        })
    }
}