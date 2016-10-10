import React, {PropTypes} from 'react';

import './_app.scss';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object
};

export default App;