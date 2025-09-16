export const attendeeTypeDefs = `#graphql
type Attendee {
id: ID!
name: String!
email: String!
eventId: ID!
}

extend type Query {
    attendees: [Attendee]
    attendee(id: ID!) : Attendee
}

extend type Mutation {
    addAttendee(name: String!, email: String!, eventId: ID!) : Attendee
    deleteAttendee(id: ID!): Boolean
}
`;