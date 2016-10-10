import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID
} from 'graphql';

import BreweryType from './BreweryTypeQL.es6';
import Brewery from './BrewerySchema.es6';

export default {
    breweries: {
        type: new GraphQLList(BreweryType),
        resolve: Brewery.getListOfBreweries
    },
    brewery: {
        type: BreweryType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve: Brewery.getBreweryById
    }
};