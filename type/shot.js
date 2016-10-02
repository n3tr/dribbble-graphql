import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList
} from 'graphql'
import User from './user'
import Images from './images'
import Comment from './comment.js'

const ShotType = new GraphQLObjectType({
  name: 'Shot',
  fields: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    width: { type: GraphQLInt },
    height: { type: GraphQLInt },
    viewsCount: {
      type: GraphQLInt,
      resolve: shot => shot.views_count
    },
    likesCount: {
      type: GraphQLInt,
      resolve: shot => shot.likes_count
    },
    commentsCount: {
      type: GraphQLInt,
      resolve: shot => shot.comments_count
    },
    attachmentsCount: {
      type: GraphQLInt,
      resolve: shot => shot.attachments_count
    },
    reboundsCount: {
      type: GraphQLInt,
      resolve: shot => shot.rebounds_count
    },
    bucketsCount: {
      type: GraphQLInt,
      resolve: shot => shot.buckets_count
    },
    createdAt: {
      type: GraphQLString,
      resolve: shot => shot.created_at
    },
    updatedAt: {
      type: GraphQLString,
      resolve: shot => shot.updated_at
    },
    htmlURL: {
      type: GraphQLString,
      resolve: shot => shot.html_url
    },
    attachmentsURL: {
      type: GraphQLString,
      resolve: shot => shot.attachments_url
    },
    bucketsURL: {
      type: GraphQLString,
      resolve: shot => shot.buckets_url
    },
    commentsURL: {
      type: GraphQLString,
      resolve: shot => shot.comments_url
    },
    likesURL: {
      type: GraphQLString,
      resolve: shot => shot.likes_url
    },
    projectsURL: {
      type: GraphQLString,
      resolve: shot => shot.projects_url
    },
    reboundsURL: {
      type: GraphQLString,
      resolve: shot => shot.rebounds_url
    },
    animated: { type: GraphQLBoolean },
    tags: { type: new GraphQLList(GraphQLString) },
    comments: { 
      type: new GraphQLList(Comment) 
    },
    user: { type: User },
    team: { type: User },
    images: { type: Images }
  }
})

export default ShotType
