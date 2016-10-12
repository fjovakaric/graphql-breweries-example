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
    country: {
        name:'country',
        type: new GraphQLNonNull(GraphQLString)
    }
};

export default {
    addBrewery: {
        type: BreweryType,
        args: args,
        resolve: (root, {name, description, established, website, country}) => {
            var newBrewery = new Brewery({
                name: name,
                description: description,
                established: established,
                website: website,
                country: country
            });

            return new Promise((resolve, reject) => {
                newBrewery.save((err, res) => {
                    err ? reject(err): resolve(res);
                });
            });
        }
    },

    updateBrewery: {
        type: BreweryType,
        args: Object.assign({id: { type: GraphQLID }}, args),
        resolve: (root, {id, name, description, established, website, country}) => {
            var newBrewery = {
                name: name,
                description: description,
                established: established,
                website: website,
                country: country
            };

            return new Promise((resolve, reject) => {
                Brewery.findOneAndUpdate({_id : id}, newBrewery, {new: true}, function (err, res) {
                    err ? reject(err): resolve(res);
                });
            });
        }
    },

    removeBrewery: {
        type: BreweryType,
        args: {
            id: { type: GraphQLID }
        },
        resolve: (root, {id}) => {
            return new Promise((resolve, reject) => {
                Brewery.findOneAndRemove({_id : id}, function (err, res) {
                    err ? reject(err): resolve(res);
                });
            });
        }
    }
};
