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
const CATEGORY_URI = 'categories';

// departments
const DepartmentType = new GraphQLObjectType({
  name: 'Department',
  fields: () => ({
    department_id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    category: {
      type: new GraphQLList(CategoryType),
      resolve: async (parentValue, args) => {
        return await get(`${CATEGORY_URI}/inDepartment/${parentValue.department_id}`);
      }
    }
  })
});

// categories
const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    category_id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    department_id: { type: GraphQLInt }
  })
});

// attributes



// Root queries
const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    department: {
        type: DepartmentType,
        args: { id: { type: GraphQLInt } },
        resolve: async (parentValue, args) => {
          return await get(`${DEPT_URI}/${args.id}`);
        }
    },
    departments: {
      type: new GraphQLList(DepartmentType),
      resolve: async (parentValue, args) => {
        return await get(`${DEPT_URI}`);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
