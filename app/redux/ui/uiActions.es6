import actionTypes from '../constants.es6';

export function imageUploaded(imageUrl, imageType) {
    return {
        type: actionTypes.IMAGE_UPLOADED,
        imageUrl,
        imageType
    };
}

export function updateSmartInput(value, field) {
    return {
        type: actionTypes.UPDATE_SMART_INPUT,
        value,
        field
    }
}