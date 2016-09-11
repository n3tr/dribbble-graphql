import express from 'express'
import graphqlHTTP from 'express-graphql'
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList
} from 'graphql'


// GraphQL ObjectType
import Shot from './type/shot'


// API
import fetchShots from './api/fetchShot'

// Static Data
// import shotsData from './data/shots.json'

// Define the schema with one top-level field, `user`, that
// takes an `id` argument and returns the User with that ID.
// Note that the `query` is a GraphQLObjectType, just like User.
// The `user` field, however, is a userType, which we defined above.
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      shots: {
        type: new GraphQLList(Shot),
        args: {
          page: {
            type: GraphQLInt,
            defaultValue: 1
          },
          size: {
            type: GraphQLInt,
            defaultValue: 12
          }
        },
        resolve: (_, args) => fetchShots(args.page, args.size)
      }
    }
  })
})

const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000)
