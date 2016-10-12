import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID
} from 'graphql';

import mongoose from 'mongoose';
import Brewery from './models/brewery/BrewerySchema.es6';

import {
    BreweryQueries,
    BreweryMutations,
    BreweryType
} from './models/brewery/BreweryQL.es6';


let RootQuery = new GraphQLObjectType({
    name: 'Query',      //Return this type of object
    fields: () => ({
        brewery: BreweryQueries.brewery,
        breweries: BreweryQueries.breweries,
        firstBrewery: BreweryQueries.firstBrewery
    })
});


let RootMutation = new GraphQLObjectType({
    name: "Mutation",
    fields: () => ({
        addBrewery: BreweryMutations.addBrewery,
        updateBrewery: BreweryMutations.updateBrewery,
        removeBrewery: BreweryMutations.removeBrewery
    })
});


let schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});

export default schema;
