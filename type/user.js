import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLBoolean
} from 'graphql'

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    htmlURL: {
      type: GraphQLString,
      resolve: (user) => user.html_url
    },
    avatarURL: {
      type: GraphQLString,
      resolve: (user) => user.avatar_url
    },
    bucketsCount: {
      type: GraphQLInt,
      resolve: (user) => user.buckets_count
    },
    commentsReceivedCount: {
      type: GraphQLInt,
      resolve: (user) => user.comments_received_count
    },
    followersCount: {
      type: GraphQLInt,
      resolve: (user) => user.followers_count
    },
    followingsCount: {
      type: GraphQLInt,
      resolve: (user) => user.followings_count
    },
    likesCount: {
      type: GraphQLInt,
      resolve: (user) => user.likes_count
    },
    likesReceivedCount: {
      type: GraphQLInt,
      resolve: (user) => user.likes_received_count
    },
    projectsCount: {
      type: GraphQLInt,
      resolve: (user) => user.projects_count
    },
    reboundsReceivedCount: {
      type: GraphQLInt,
      resolve: (user) => user.rebounds_received_count
    },
    shotsCount: {
      type: GraphQLInt,
      resolve: (user) => user.shots_count
    },
    teamsCount: {
      type: GraphQLInt,
      resolve: (user) => user.teams_count
    },
    canUploadShot: {
      type: GraphQLBoolean,
      resolve: (user) => user.can_upload_shot
    },
    type: { type: GraphQLString },
    pro: { type: GraphQLBoolean },
    bucketsURL: {
      type: GraphQLString,
      resolve: (user) => user.buckets_url
    },
    followersURL: {
      type: GraphQLString,
      resolve: (user) => user.followers_url
    },
    followingURL: {
      type: GraphQLString,
      resolve: (user) => user.following_url
    },
    likesURL: {
      type: GraphQLString,
      resolve: (user) => user.likes_url
    },
    shotsURL: {
      type: GraphQLString,
      resolve: (user) => user.shots_url
    },
    teamsURL: {
      type: GraphQLString,
      resolve: (user) => user.teams_url
    },
    createdAt: {
      type: GraphQLString,
      resolve: (user) => user.created_at
    },
    updatedAt: {
      type: GraphQLString,
      resolve: (user) => user.updated_at
    }
  }
})

export default UserType
