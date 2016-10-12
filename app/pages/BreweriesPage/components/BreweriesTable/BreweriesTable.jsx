import React, {PropTypes} from 'react';
import { Table } from 'react-bootstrap';

import './_breweries-table.scss';

// Set Component Name
class BreweriesTable extends React.Component {
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
                    country
                }
            }
        `, actions.breweriesQuerySuccess)
    }

    render() {
        const { breweries, actions } = this.props;

        const noBreweries = <tr><td>No breweries</td></tr>;
        const breweryRows = breweries.map(b => {
            return (
                <tr onClick={() => this.getBrewery(b._id)}
                    key={b._id} >

                    <td>{b.name}</td>
                    <td>{b.established}</td>
                </tr>
            )
        });

        return (
            <Table responsive hover={true} class="brewery-table">
                <thead>
                <tr>
                    <th>Brewery</th>
                    <th>Established</th>
                </tr>
                </thead>
                <tbody>
                    {breweries.length ? breweryRows : noBreweries}
                </tbody>
            </Table>
        );
    }
}

// Set component propTypes
BreweriesTable.propTypes = {
    actions: PropTypes.object,
    breweries: PropTypes.array
};

export default BreweriesTable;