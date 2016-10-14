import React, { PropTypes } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router';

import './_home-page.scss'

class HomePage extends React.Component {
    render() {
        return (
            <div className="home-page">
                <Jumbotron>
                    <h1>Welcome!</h1>
                    <p>This is a CRUD example using mongoDB, graphQL, redux and reactJS</p>
                    <Link to="/breweries">Breweries Page</Link>
                </Jumbotron>
            </div>
        );
    }
}

HomePage.propTypes = {
};

export default HomePage;