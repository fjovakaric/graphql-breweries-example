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
        description: 'Get all breweries',
        resolve: Brewery.getListOfBreweries
    },
    brewery: {
        type: BreweryType,
        description: 'Get brewery by id',
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve: Brewery.getBreweryById
    },
    firstBrewery: {
        type: BreweryType,
        description: 'Get first brewery from db',
        resolve: Brewery.getFirst
    }
};