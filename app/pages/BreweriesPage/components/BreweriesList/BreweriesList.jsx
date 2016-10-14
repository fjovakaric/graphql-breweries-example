import React, {PropTypes} from 'react';
import { Table } from 'react-bootstrap';

import './_breweries-list.scss';

// Set Component Name
class BreweriesList extends React.Component {
    getBrewery(id) {
        const { actions } = this.props;
        actions.graphqlQuery(`
            query RootQuery {
                brewery (id: "${id}") {
                    _id,
                    name,
                    description,
                    established,
                    website,
                    logoUrl,
                    country
                }
            }
        `, actions.breweriesQuerySuccess)
    }

    render() {
        const { breweries, brewery, actions } = this.props;

        const noBreweries = <p>There are currently no breweries. Create one!</p>;
        let classes;
        const breweryItems = breweries.map(b => {
            classes = (brewery && b._id == brewery._id) ? 'brewery-item active' : 'brewery-item';
            return (
                <div className={classes}
                     onClick={() => this.getBrewery(b._id)}
                     key={b._id}>
                    <div className="pull-left logo" style={{ backgroundImage: 'url(' +b.logoUrl+ ')'}}></div>
                    <h5>{ b.name }</h5>
                    <p>{ b.country }, { b.established }</p>
                </div>
            )
        });

        return (
            <div className="breweries-list">
                {breweries.length ? breweryItems : noBreweries}
            </div>
        );
    }
}

// Set component propTypes
BreweriesList.propTypes = {
    actions: PropTypes.object,
    breweries: PropTypes.array
};

export default BreweriesList;