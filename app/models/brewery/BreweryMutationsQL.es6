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

const args = {
    name: {
        name:'name',
        type: new GraphQLNonNull(GraphQLString)
    },
    description: {
        name:'description',
        type: new GraphQLNonNull(GraphQLString)
    },
    established: {
        name:'established',
        type: GraphQLInt
    },
    website: {
        name:'website',
        type: new GraphQLNonNull(GraphQLString)
    },
    logoUrl: {
        name:'website',
        type: new GraphQLNonNull(GraphQLString)
    },
    country: {
        name:'country',
        type: new GraphQLNonNull(GraphQLString)
    }
};

export default {
    addBrewery: {
        type: BreweryType,
        args: args,
        resolve: Brewery.addBrewery
    },

    updateBrewery: {
        type: BreweryType,
        args: Object.assign({id: { type: GraphQLID }}, args),
        resolve: Brewery.updateBrewery
    },

    removeBrewery: {
        type: BreweryType,
        args: {
            id: { type: GraphQLID }
        },
        resolve: Brewery.removeBrewery
    }
};
