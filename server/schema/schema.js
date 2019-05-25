// SWAGGER DOC: https://backendapi.turing.com/docs/
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
  GraphQLList
} = require('graphql');

const _ = require('lodash');
const {
  get
} = require('../utils/http');

const DEPT_URI = 'departments';

const DepartmentType = new GraphQLObjectType({
  name: 'Department',
  fields: () => ({
    department_id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    department: {
        type: new GraphQLList(DepartmentType),
        args: { id: { type: GraphQLInt } },
        resolve: async (parentValue, args) => {
          return args.id ? await get(`${DEPT_URI}/${args.id}`) : await get(`${DEPT_URI}`) ;
        }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
