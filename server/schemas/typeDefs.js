
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Family {
    _id: ID!
    username: String!
    email: String!
    password: String!
    image: String
    familyId: [FamilyUser!]!
    savedtask: [Task]
  }

  type Task {
    _id: ID!
    taskname: String!
    location: String!
    Date: String
  }

  type FamilyUser {
    _id: ID!
    familyuserId: String!
    birthDay: String!
    proNoun: String
    religion: String
  }

  type Query {
    me: Family
    getAllTasks: [Task!]!
    getFamilyUserById(id: ID!): FamilyUser
  }

  type Mutation {    
    createTask(taskname: String!, location: String!): Task
    createFamilyUser(familyuserId: String!, birthDay: String!, proNoun: String, religion: String): FamilyUser
   
    updateTask(id: ID!, taskname: String, location: String, Date: String, taskId: String): Task
    updateFamilyUser(id: ID!, familyuserId: String, birthDay: String, proNoun: String, religion: String): FamilyUser
   
    deleteTask(id: ID!): Task
    deleteFamilyUser(id: ID!): FamilyUser

    # New mutations for authentication
    register(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }

  type Auth {
    token: ID!
    user: Family
  }

`;

module.exports = typeDefs;
