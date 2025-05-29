const { gql } = require('apollo-server');

const typeDefs = gql`
  enum Status {
    Todo
    InProgress
    Done
  }

  type Task {
    id: ID!
    title: String!
    description: String
    status: Status
    dueDate: String
  }

  type Query {
    tasks: [Task]
    task(id: ID!): Task   # ✅ Add this line
    tasksByStatus(status: Status!): [Task]
  }

  type Mutation {
    createTask(title: String!, description: String, status: Status, dueDate: String): Task
    updateTaskStatus(id: ID!, status: Status!): Task
  }
`;

module.exports = typeDefs;
