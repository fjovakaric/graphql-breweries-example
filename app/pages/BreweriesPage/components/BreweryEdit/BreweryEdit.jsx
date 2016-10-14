import React, {PropTypes} from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import FaFloppyO from 'react-icons/lib/fa/floppy-o';
import FaTimes from 'react-icons/lib/fa/times-circle-o';

import imageTypes from '../../../../constants/imageConstants.es6';
import ImageUpload from '../../../../components/molecules/ImageUpload/ImageUpload.jsx';
import SmartInput from '../../../../components/molecules/SmartInput/SmartInput.jsx';


import './_brewery-edit.scss';

// Set Component Name
class BreweryEdit extends React.Component {
    saveBrewery() {
        // console.log(this.state.brewery);
        const { actions, editingBrewery } = this.props;
        // TODO(fj): GraphQL CRUD mutations
        if (editingBrewery._id) {
            actions.graphqlMutation(`
                mutation Mutation {
                    updateBrewery (
                        id: "${editingBrewery._id}",
                        name: "${editingBrewery.name}",
                        description: "${editingBrewery.description}",
                        established: ${editingBrewery.established},
                        website: "${editingBrewery.website}",
                        logoUrl: "${editingBrewery.logoUrl}",
                        country: "${editingBrewery.country}") {
                    
                        _id,
                        name,
                        description,
                        established,
                        website,
                        logoUrl,
                        country
                    }
                }
            `, actions.breweriesUpdateSuccess)
        } else {
            actions.graphqlMutation(`
                mutation Mutation {
                    addBrewery (
                        name: "${editingBrewery.name}",
                        description: "${editingBrewery.description}",
                        established: ${editingBrewery.established},
                        website: "${editingBrewery.website}",
                        logoUrl: "${editingBrewery.logoUrl}",
                        country: "${editingBrewery.country}") {
                    
                        _id,
                        name,
                        description,
                        established,
                        website,
                        logoUrl,
                        country
                    }
                }
            `, actions.breweriesNewSuccess)
        }
    }

    cancel() {
        this.props.actions.breweriesChangeUI({
            isNew: false,
            isEditing: false
        })
    }

    render() {
        const { editingBrewery, actions } = this.props;

        return (
            <form className="brewery-edit">
                <Row>
                    <Col xs={8}>
                        <SmartInput
                            type="text"
                            placeholder="eg. Brewdog"
                            label="Name:"
                            field="editingBrewery.name"
                            value={editingBrewery.name}
                            actions={actions}/>
                        <SmartInput
                            type="text"
                            placeholder="eg. We make awesome IPA!"
                            label="Description:"
                            field="editingBrewery.description"
                            value={editingBrewery.description}
                            actions={actions}/>
                        <SmartInput
                            type="number"
                            placeholder="eg. 2010"
                            label="Established:"
                            field="editingBrewery.established"
                            value={editingBrewery.established}
                            actions={actions}/>
                        <SmartInput
                            type="text"
                            placeholder="eg. www.beer.org"
                            label="Website:"
                            field="editingBrewery.website"
                            value={editingBrewery.website}
                            actions={actions}/>
                        <SmartInput
                            type="text"
                            placeholder="eg. Japan"
                            label="Country:"
                            field="editingBrewery.country"
                            value={editingBrewery.country}
                            actions={actions}/>
                    </Col>
                    <Col xs={4}>
                        <ImageUpload
                            imageType={imageTypes.BREWERY_LOGO}
                            url={editingBrewery.logoUrl}
                            actions={actions}/>
                    </Col>
                </Row>
                
                <Button bsStyle="success" onClick={() => this.saveBrewery()} ><FaFloppyO /> Save</Button>
                <Button bsStyle="danger" onClick={() => this.cancel()} ><FaTimes /> Cancel</Button>
            </form>
        );
    }
}

// Set component propTypes
BreweryEdit.propTypes = {
    actions: PropTypes.object,
    breweries: PropTypes.array
};

export default BreweryEdit;