import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";

const main = async () => {
  const createServer = new ApolloServer({ typeDefs, resolvers });
  let server = await createServer.listen();

  console.log(`🚀  Server ready at ${server.url}`);
};

main().catch((err) => {
  console.error(err);
});
