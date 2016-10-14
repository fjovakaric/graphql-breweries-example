import React, {PropTypes} from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

// import './_smart-input.scss';

// Set Component Name
class SmartInput extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: props.value || ''
        };
    }

    changeValue(e) {
        this.setState({
            value: e.target.value
        })
    }

    updateInput(e, field) {
        const { updateSmartInput } = this.props.actions;
        this.setState({
            value: e.target.value
        })
        updateSmartInput(e.target.value, field);
    }

    render() {
        const { type, placeholder, label, field } = this.props;
        let value = this.state.value;

        return (
            <FormGroup>
                <ControlLabel>{label}</ControlLabel>
                <FormControl
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={e => this.changeValue(e)}
                    onBlur={e => this.updateInput(e, field)}
                />
            </FormGroup>
        );
    }
}

// Usage
// <SmartInput
//     type=""
//     placeholder=""
//     label=""
//     field=""
//     actions={actions}/>

// Set component propTypes
SmartInput.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    field: PropTypes.string,
    actions: PropTypes.object
};

export default SmartInput;