const {clients, projects} =require('../sampleData');

const {GraphQLSchema, GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString} = require('graphql');

//Client Type
const ClientType = new GraphQLObjectType({
  name: 'Client Type',
  description: 'Client Type',
  fields: () => ({
    id: {type: GraphQLNonNull(GraphQLID)},
    name: {type: GraphQLNonNull(GraphQLString)},
    email: {type: GraphQLNonNull(GraphQLString)},
    phone: {type: GraphQLNonNull(GraphQLString)}
  })
})

//Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: () => ({
    client: {
      type: ClientType,
      args: {
        id: {type: GraphQLNonNull(GraphQLID)}
      },
      resolve: (parent, args) => {
        return clients.find(client => client.id === args.id)
      }
    }
  })
})

//Schema
const Schema = new GraphQLSchema({
  query: RootQuery
})

// console.log(module.exports.Schema)

module.exports = Schema