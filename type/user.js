import {
  GraphQLObjectType, GraphQLString, GraphQLID
} from 'graphql'

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
  }
})

export default UserType
