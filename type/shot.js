import {
  GraphQLObjectType, GraphQLString, GraphQLID
} from 'graphql'
import User from './user'

const ShotType = new GraphQLObjectType({
  name: 'Shot',
  fields: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    user: {
      type: User
    }
  }
})

export default ShotType
