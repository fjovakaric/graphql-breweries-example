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
    addBrewery: {
        type: BreweryType,
        args: {
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
            country: {
                name:'country',
                type: new GraphQLNonNull(GraphQLString)
            }
        },
        resolve: (root, {name, description, established, country}) => {
            var newBrewery = new Brewery({
                name: name,
                description: description,
                established: established,
                country: country
            });

            return new Promise((resolve, reject) => {
                newBrewery.save((err, res) => {
                    err ? reject(err): resolve(res);
                });
            });
        }
    }
};
