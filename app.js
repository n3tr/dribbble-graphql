const graphql = require('graphql')
const express = require('express')
const graphqlHTTP = require('express-graphql')

const app = express()

// Create GraphQL schrma
const schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: graphql.GraphQLString,
        resolve: () => {
          return "world"
        }
      }
    }
  })
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000)
