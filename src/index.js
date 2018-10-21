import { GraphQLServer } from 'graphql-yoga';

// type definitions: define data type
// Scalar: single value
// String // Boolean // Int // Float // ID
const typeDefs = `
  type Query {
    greeting(name: String): String!
    me: User!
    Post: Post!
  }

  type User {
    name: String!
    id: ID!
    email: String!
    age: Int
  }

  type Post {
    id: ID!,
    title: String!,
    body: String!,
    published: Boolean!
  }
`;

// resolvers: functions that return the required data type
const resolvers = {
  Query: {
    greeting() {
      return 'Hello!';
    },
    me() {
      return {
        id: '123123',
        name: 'Paul',
        age: 27
      };
    },
    Post() {
      return {
        id: '123123',
        title: 'Groceries',
        body: 'buy avocados, mushrooms, veggies',
        published: true
      };
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log('server is up');
});
