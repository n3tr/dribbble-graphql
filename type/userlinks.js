import {
  GraphQLObjectType, GraphQLString
} from 'graphql'

const UserLinks = new GraphQLObjectType({
  name: 'UserLinks',
  fields: {
    web: { type: GraphQLString },
    twitter: { type: GraphQLString },
  }
})

export default UserLinks
