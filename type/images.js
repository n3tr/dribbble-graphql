import {
  GraphQLObjectType, GraphQLString
} from 'graphql'

const Images = new GraphQLObjectType({
  name: 'ShotImages',
  fields: {
    hidpi: { type: GraphQLString },
    normal: { type: GraphQLString },
    teaser: { type: GraphQLString },
  }
})

export default Images
