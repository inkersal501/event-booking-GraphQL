import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
 
const GET_EVENTS = gql`
  query GetEvents {
    events {
      id
      title
      description
      date
      location
    }
  }
`;

export default function EventList() {
  const { loading, error, data } = useQuery(GET_EVENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "15px", width: "100%", textAlign:"center" }}>Events</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems:"center", width: "100%" }}>
        {data.events.map((event) => (
          <div
            key={event.id}
            className="events-card" 
          >
            <div>
              <h3 style={{ margin: "0 0 5px 0" }}>{event.title}</h3>         
              <p>{event.description}</p>     
            </div>
            <div>
              <span style={{ fontSize: "14px", fontWeight: "bold", color: "#333" }}>
                📅 {event.date}
              </span>
              <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
                📍 {event.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
