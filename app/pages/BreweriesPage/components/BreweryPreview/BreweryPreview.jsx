import React, {PropTypes} from 'react';
import { Button } from 'react-bootstrap';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';


import './_brewery-preview.scss';

// Set Component Name
class BreweryPreview extends React.Component {
    editBrewery() {
        this.props.actions.breweriesChangeUI({
            isNew: false,
            isEditing: true
        });
    }

    deleteBrewery() {
        console.log('Feature disabled');
        return;
        const { brewery, actions } = this.props;
        actions.graphqlMutation(`
                mutation Mutation {
                    removeBrewery(id: "${brewery._id}") {
                        _id
                    }
                }
            `, actions.breweriesRemoveSuccess)

    }

    render() {
        const { brewery, actions } = this.props;

        return (
            <div className="brewery-preview">
                {brewery.logoUrl ? <img className="pull-right brewery-logo" src={brewery.logoUrl} alt=""/> : ''}
                <h3>{brewery.name}</h3>
                <p><strong>Description:</strong> {brewery.description}</p>
                <p><strong>Website:</strong> <a href={brewery.website} target="_blank">{brewery.website}</a></p>
                <p><strong>Established:</strong> {brewery.established}</p>
                <p><strong>Country:</strong> {brewery.country}</p>
                <Button bsStyle="danger" onClick={() => this.deleteBrewery()}><FaTrash /></Button>
                <Button onClick={() => this.editBrewery()}><FaPencil /></Button>
            </div>
        );
    }
}

// Set component propTypes
BreweryPreview.propTypes = {
    brewery: PropTypes.object,
    actions: PropTypes.object
};

export default BreweryPreview;