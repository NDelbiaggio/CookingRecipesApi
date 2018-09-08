const graphqlHTTP = require("express-graphql");

const schema = require("./schema");
const resolvers = require("./resolvers");

module.exports = function(app) {
  app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      rootValue: resolvers,
      graphiql: true
    })
  );
};
