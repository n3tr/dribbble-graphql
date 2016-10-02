import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt
} from 'graphql'

const Attachment = new GraphQLObjectType({
  name: 'Attachment',
  fields: {
    id: { type: GraphQLID },
    url: { type: GraphQLString },
    thumbnailUrl: {
      type: GraphQLString,
      resolve: attachment => attachment.thumbnail_url
    },
    size: { type: GraphQLInt },
    contentType: {
      type: GraphQLString,
      resolve: attachment => attachment.content_type
    },
    viewsCount: {
      type: GraphQLInt,
      resolve: attachment => attachment.views_count
    },
    createdAt: {
      type: GraphQLString,
      resolve: attachment => attachment.created_at
    }
  }
})

export default Attachment
