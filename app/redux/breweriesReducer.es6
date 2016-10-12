import actionTypes from './constants.es6';

const initialState = function() {
    return {
        uiState: {
            isNew: false,
            isEditing: false
        },
        breweries: [],
        brewery: undefined
    };
};

export default function breweriesReducer($$state = initialState(), action) {
    let brewery, breweries, uiState;

    switch(action.type) {
        case actionTypes.BREWERIES_QUERY_SUCCESS:
            breweries = action.data.breweries || $$state.breweries;
            brewery = action.data.brewery || $$state.brewery;

            return {
                uiState: Object.assign({}, $$state.uiState),
                breweries: Object.assign([], breweries),
                brewery: Object.assign({}, brewery)
            };

        case actionTypes.BREWERIES_NEW_SUCCESS:
            brewery = action.brewery;
            uiState = {
                isEditing: false,
                isNew: false
            };

            return {
                uiState: Object.assign({}, uiState),
                breweries: [
                    ...$$state.breweries,
                    brewery
                ],
                brewery: Object.assign({}, brewery)
            };

        case actionTypes.BREWERIES_UPDATE_SUCCESS:
            breweries = $$state.breweries.map(b => {
                if (b._id == action.brewery._id) {
                    return action.brewery;
                } else {
                    return b;
                }
            });

            brewery = action.brewery;
            uiState = {
                isEditing: false,
                isNew: false
            };

            return {
                uiState: Object.assign({}, uiState),
                breweries: Object.assign([], breweries),
                brewery: Object.assign({}, brewery)
            };

        case actionTypes.BREWERIES_REMOVE_SUCCESS:
            breweries = $$state.breweries.filter(b => {
                if (b._id != action.id) {
                    return b;
                }
            });

            console.log(breweries);

            return {
                uiState: Object.assign({}, $$state.uiState),
                breweries: Object.assign([], breweries),
                brewery: undefined
            };

        case actionTypes.BREWERIES_CHANGE_UI:
            return {
                uiState: Object.assign({}, action.uiState),
                breweries: Object.assign([], $$state.breweries),
                brewery: Object.assign({}, $$state.brewery)
            };

        default:
            return $$state;
    }
}