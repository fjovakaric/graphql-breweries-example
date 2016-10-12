import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
    name: 'Brewery',
    description: 'A brewery',
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        established: {
            type: GraphQLInt
        },
        website: {
            type: GraphQLString
        },
        country: {
            type: GraphQLString
        }
    })
});
