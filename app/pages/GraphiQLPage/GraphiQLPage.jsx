import React, { PropTypes } from 'react';

import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';

import '../../../node_modules/graphiql/graphiql.css';
import './_graphiql-page.scss';

export default class GraphiQLPage extends React.Component {
    render() {
        function graphQLFetcher(graphQLParams) {
            return fetch(window.location.origin + '/graphql', {
                method: 'post',
                headers: { 'Content-Type': 'application/graphql' },
                body: graphQLParams.query
            }).then(response => response.json());
        }

        return (
            <GraphiQL fetcher={graphQLFetcher}></GraphiQL>
        );
    }
}

GraphiQLPage.propTypes = {};