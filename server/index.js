const {GraphQLServer} = require('graphql-yoga');
const {readFileSync} = require('fs');

const resolvers = require('./schema/resolvers');
const typeDefs = readFileSync(`${__dirname}/schema/typeDefs.graphql`,'utf8');

const options = {
    port: 3001,
    endpoint: '/graphql',
    playground: '/graphiql'
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})
server.start(options, () => 
    console.log(`Server running at: ${options.port}`)
);