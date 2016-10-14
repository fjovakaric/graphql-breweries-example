import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Table, Button } from 'react-bootstrap';
import FaPlus from 'react-icons/lib/fa/plus';
import * as actions from '../../redux/actions.es6';

import BreweriesTable from './components/BreweriesTable/BreweriesTable.jsx';
import BreweryPreview from './components/BreweryPreview/BreweryPreview.jsx';
import BreweryEdit from './components/BreweryEdit/BreweryEdit.jsx';

import './_breweries-page.scss'

class BreweriesPage extends React.Component {
    componentDidMount() {
        const { actions, breweries } = this.props;
        if (!breweries.length) {
            actions.graphqlQuery(`
                query RootQuery{
                    breweries{
                        _id,
                        name,
                        established,
                        logoUrl
                    }
                    brewery: firstBrewery {
                        _id,
                        name,
                        established,
                        website,
                        logoUrl,
                        country
                    }
                }
                `, actions.breweriesQuerySuccess);
        }
    }

    newBrewery() {
        this.props.actions.breweriesChangeUI({
            isNew: true,
            isEditing: false
        });
    }

    render() {
        const { brewery, breweries, actions, uiState } = this.props;
        const { isEditing, isNew } = uiState;

        return (
            <div className="breweries-page">
                <h1>Breweries</h1>
                <Row>
                    <Col xs={6} >
                        {breweries.length ? <BreweriesTable breweries={breweries} actions={actions} /> : ''}
                        <Button onClick={() => this.newBrewery()}><FaPlus /> Brewery</Button>
                    </Col>
                    <Col xs={6} >
                        {brewery && !isEditing && !isNew ? <BreweryPreview brewery={brewery} actions={actions} /> : ''}
                        {brewery && isEditing ? <BreweryEdit brewery={brewery} actions={actions} /> : ''}
                        {isNew ? <BreweryEdit actions={actions} /> : ''}
                    </Col>
                </Row>
            </div>
        );
    }
}

BreweriesPage.propTypes = {
    breweries: PropTypes.array,
    brewery: PropTypes.object,
    uiState: PropTypes.object,
    actions: PropTypes.object
};

function mapStateToProps($$state, ownProps) {
    return {
        breweries: $$state.breweries.breweries,
        brewery: $$state.breweries.brewery,
        uiState: $$state.breweries.uiState
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BreweriesPage);