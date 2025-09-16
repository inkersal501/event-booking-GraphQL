export const eventTypeDefs = `#graphql
type Event {
id: ID!
title: String!
description: String
date: String!
location: String!
}

extend type Query {
events: [Event]
event(id: ID): Event
}

extend type Mutation {
addEvent(title: String!, description: String, date: String!, location: String!) : Event
updateEvent(id: ID!, title: String, description: String, date: String, location: String) : Event
deleteEvent(id: ID!): Boolean
}
`;
