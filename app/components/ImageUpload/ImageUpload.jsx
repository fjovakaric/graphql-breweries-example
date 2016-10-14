import React, {PropTypes} from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import ReactFilepicker from 'react-filepicker';


import './_image-upload.scss';

// Set Component Name
class ImageUpload extends React.Component {

    uploadImageSuccess(res) {
        const { actions, imageType } = this.props;
        actions.imageUploaded(res.url, imageType);
    }

    componentDidMount() {
        document.querySelector('.image-upload div div').innerHTML = 'Drop image here!';

    }

    render() {
        const FILESTACK_API_KEY = process.env.FILESTACK_API_KEY;

        return (
            <div className="image-upload">
                <ReactFilepicker apikey={FILESTACK_API_KEY} mode="dragdrop" onSuccess={(res) => this.uploadImageSuccess(res)} />
            </div>
        );
    }
}

// Set component propTypes
ImageUpload.propTypes = {
    actions: PropTypes.object
};

export default ImageUpload;