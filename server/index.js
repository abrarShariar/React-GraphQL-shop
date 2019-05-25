const express = require('express');
const app = express();
const expressGraphQL = require('express-graphql');
const PORT = 4000;

const schema = require('./schema/schema');

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}))

app.listen(PORT, () => {
  console.log(`GraphQL server running on ${PORT}`);
})
