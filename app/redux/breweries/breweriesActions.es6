import actionTypes from '../constants.es6';

export function breweriesQuerySuccess(data) {
    return {
        type: actionTypes.BREWERIES_QUERY_SUCCESS,
        data
    }
}

export function breweriesNewSuccess(data) {
    return {
        type: actionTypes.BREWERIES_NEW_SUCCESS,
        brewery: data.addBrewery
    }
}

export function breweriesUpdateSuccess(data) {
    return {
        type: actionTypes.BREWERIES_UPDATE_SUCCESS,
        brewery: data.updateBrewery
    }
}

export function breweriesRemoveSuccess(data) {
    return {
        type: actionTypes.BREWERIES_REMOVE_SUCCESS,
        id: data.removeBrewery._id
    }
}

export function breweriesChangeUI(uiState) {
    return {
        type: actionTypes.BREWERIES_CHANGE_UI,
        uiState
    }
}