import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList
} from 'graphql'
import User from './user'

const Comment = new GraphQLObjectType({
  name: 'Comment',
  fields: {
    id: { type: GraphQLID },
    body: { type: GraphQLString },
    likesCount: {
      type: GraphQLInt,
      resolve: comment => comment.likes_count
    },
    likesURL: {
      type: GraphQLString,
      resolve: comment => comment.likes_url
    },
    createdAt: {
      type: GraphQLString,
      resolve: comment => comment.created_at
    },
    updatedAt: {
      type: GraphQLString,
      resolve: comment => comment.updated_at
    },
    user: { type: User }
  }
})

export default Comment
