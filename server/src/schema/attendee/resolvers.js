import {attendees} from "../../data/attendees.js";

export const attendeeResolvers = {
    Query : {
        attendees: () => attendees,
        attendee: (_, {id}) => attendees.find((a) => a.id === id),
    },
    Mutation : {
        addAttendee : (_, {name, email, eventId}) => {
            const newAttendee = { id: String(attendees.length+1), name, email, eventId };
            attendees.push(newAttendee);
            return newAttendee;
        },
        deleteAttendee : (_, {id}) => {
            const index = attendees.findIndex((a) => a.id===id);
            if(index === -1) return false;
            attendees.splice(index, 1);
            return true;
        }
    }
}