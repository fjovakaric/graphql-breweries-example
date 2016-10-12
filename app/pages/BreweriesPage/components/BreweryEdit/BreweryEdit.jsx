import React, {PropTypes} from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import FaFloppyO from 'react-icons/lib/fa/floppy-o';
import FaTimes from 'react-icons/lib/fa/times-circle-o';


import './_brewery-edit.scss';

// Set Component Name
class BreweriesTable extends React.Component {
    constructor(props, context) {
        super(props, context);
        const emptyBrewery = {
            name: '',
            description: '',
            established: 0,
            website: '',
            country: ''
        };

        this.state = {
            brewery: Object.assign(emptyBrewery, props.brewery)
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.brewery._id != nextProps.brewery._id) {
            this.setState({
                brewery: nextProps.brewery
            })
        }
    }

    updateField(fieldName, e) {
        const breweryToEdit =  Object.assign({}, this.state.brewery);
        breweryToEdit[fieldName] = e.target.value;

        this.setState({
            brewery: breweryToEdit
        })
    }

    saveBrewery() {
        console.log(this.state.brewery);
        const { actions } = this.props;
        // TODO(fj): GraphQL CRUD mutations
        if (this.state.brewery._id) {
            actions.graphqlMutation(`
                mutation Mutation {
                    updateBrewery (
                        id: "${this.state.brewery._id}",
                        name: "${this.state.brewery.name}",
                        description: "${this.state.brewery.description}",
                        established: ${this.state.brewery.established},
                        website: "${this.state.brewery.website}",
                        country: "${this.state.brewery.country}") {
                    
                        _id,
                        name,
                        description,
                        established,
                        website,
                        country
                    }
                }
            `, actions.breweriesUpdateSuccess)
        } else {
            actions.graphqlMutation(`
                mutation Mutation {
                    addBrewery (
                        name: "${this.state.brewery.name}",
                        description: "${this.state.brewery.description}",
                        established: ${this.state.brewery.established},
                        website: "${this.state.brewery.website}",
                        country: "${this.state.brewery.country}") {
                    
                        _id,
                        name,
                        description,
                        established,
                        website,
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
        const { brewery, actions } = this.props;
        const breweryToEdit = this.state.brewery;

        return (
            <form className="brewery-edit">
                <FormGroup>
                    <ControlLabel>Name:</ControlLabel>
                    <FormControl
                        type="text"
                        value={breweryToEdit.name}
                        placeholder="eg. Brewdog"
                        onChange={e => this.updateField('name', e)}
                    />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Description:</ControlLabel>
                    <FormControl
                        type="text"
                        value={breweryToEdit.description}
                        placeholder="eg. We make awesome Beer!"
                        onChange={e => this.updateField('description', e)}
                    />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Established:</ControlLabel>
                    <FormControl
                        type="number"
                        value={breweryToEdit.established}
                        placeholder="eg. 2000"
                        onChange={e => this.updateField('established', e)}
                    />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Website:</ControlLabel>
                    <FormControl
                        type="text"
                        value={breweryToEdit.website}
                        placeholder="eg. www.beer.com"
                        onChange={e => this.updateField('website', e)}
                    />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Country:</ControlLabel>
                    <FormControl
                        type="text"
                        value={breweryToEdit.country}
                        placeholder="eg. USA"
                        onChange={e => this.updateField('country', e)}
                    />
                </FormGroup>
                <Button onClick={() => this.saveBrewery()} ><FaFloppyO /> Save</Button>
                <Button onClick={() => this.cancel()} ><FaTimes /> Cancel</Button>
            </form>
        );
    }
}

// Set component propTypes
BreweriesTable.propTypes = {
    actions: PropTypes.object,
    breweries: PropTypes.array
};

export default BreweriesTable;