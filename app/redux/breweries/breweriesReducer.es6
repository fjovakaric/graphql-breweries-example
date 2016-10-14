import actionTypes from './../constants.es6';
import imageTypes from '../../constants/imageConstants.es6';

const initialState = function() {
    return {
        uiState: {
            isNew: false,
            isEditing: false
        },
        breweries: [],
        brewery: undefined,
        editingBrewery: {
            name: '',
            description: '',
            established: 0,
            logoUrl: '',
            website: '',
            country: ''
        }
    };
};

export default function breweriesReducer($$state = initialState(), action) {
    let brewery, breweries, uiState;

    switch(action.type) {
        case actionTypes.BREWERIES_QUERY_SUCCESS:
            breweries = action.data.breweries || $$state.breweries;
            brewery = action.data.brewery || $$state.brewery;

            return {
                uiState: Object.assign({}, initialState().uiState),
                breweries: Object.assign([], breweries),
                brewery: Object.assign({}, brewery),
                editingBrewery: Object.assign({}, $$state.editingBrewery)
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
                brewery: Object.assign({}, brewery),
                editingBrewery: Object.assign({}, initialState().editingBrewery)
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
                brewery: Object.assign({}, brewery),
                editingBrewery: Object.assign({}, initialState().editingBrewery)
            };

        case actionTypes.BREWERIES_REMOVE_SUCCESS:
            breweries = $$state.breweries.filter(b => {
                if (b._id != action.id) {
                    return b;
                }
            });

            return {
                uiState: Object.assign({}, $$state.uiState),
                breweries: Object.assign([], breweries),
                brewery: undefined,
                editingBrewery: Object.assign({}, initialState().editingBrewery)
            };

        case actionTypes.BREWERIES_CHANGE_UI:
            return {
                uiState: Object.assign({}, action.uiState),
                breweries: Object.assign([], $$state.breweries),
                brewery: Object.assign({}, $$state.brewery),
                editingBrewery: action.uiState.isEditing ? Object.assign({}, $$state.brewery) : Object.assign({}, initialState().editingBrewery)
            };

        case actionTypes.IMAGE_UPLOADED:
            if (action.imageType == imageTypes.BREWERY_LOGO) {
                return {
                    uiState: Object.assign({}, $$state.uiState),
                    breweries: Object.assign([], $$state.breweries),
                    brewery: Object.assign({}, $$state.brewery),
                    editingBrewery: Object.assign({}, $$state.editingBrewery, {logoUrl: action.imageUrl})
                };
            } else {
                return $$state;
            }

        case actionTypes.UPDATE_SMART_INPUT:
            const { value, field } = action;
            const fields = field.split('.');
            let change = {};

            if ($$state[fields[0]]) {
                change[fields[1]] = value;
                return {
                    uiState: Object.assign({}, $$state.uiState),
                    breweries: Object.assign([], $$state.breweries),
                    brewery: Object.assign({}, $$state.brewery),
                    editingBrewery: Object.assign({}, $$state.editingBrewery, change)
                };
            } else {
                return Object.assign({}, $$state);
            }

        default:
            return Object.assign({}, $$state);
    }
}