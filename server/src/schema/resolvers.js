import { attendeeResolvers } from "./attendee/resolvers.js";
import { eventResolvers } from "./event/resolvers.js";

export const resolvers = [attendeeResolvers, eventResolvers];
