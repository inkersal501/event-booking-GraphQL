import {events} from "../../data/events.js";

export const eventResolvers = {
    Query: {
        events: () => events,
        event: (_, {id}) => events.find((e)=>e.id === id),
    },
    Mutation : {
        addEvent: (_, {title, description, date, location}) => {
            const newEvent = { id: String(events.length+1), title, description, date, location };
            events.push(newEvent);
            return newEvent;
        },
        updateEvent: (_, {id, title, description, date, location}) => {
            const event = events.find((e) =>e.id===id);
            if(!event) return null;
            if(title) event.title = title;
            if(description) event.description = description;
            if(date) event.date = date;
            if(location) event.location = location;
            return event;
        },
        deleteEvent: (_, {id}) => {
            const index = events.findIndex(e=>e.id===id);
            if(index === -1) return false;
            events.splice(index, 1);
            return true;
        }
    }
}