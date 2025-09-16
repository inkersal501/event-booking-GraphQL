import { attendeeTypeDefs } from "./attendee/typeDefs.js";
import { eventTypeDefs } from "./event/typeDefs.js";

export const typeDefs = `#graphql
    type Query
    type Mutation
`;

export const allTypeDefs = [typeDefs, eventTypeDefs, attendeeTypeDefs];