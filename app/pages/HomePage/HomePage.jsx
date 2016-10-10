import React, { PropTypes } from 'react';
import { Jumbotron } from 'react-bootstrap';

import './_home-page.scss'

class HomePage extends React.Component {
    render() {
        return (
            <div className="home-page">
                <Jumbotron>
                    <h1>Welcome!</h1>
                    <p>This is a graphQL example</p>
                </Jumbotron>
            </div>
        );
    }
}

HomePage.propTypes = {
};

export default HomePage;