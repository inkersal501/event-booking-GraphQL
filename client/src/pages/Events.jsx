import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import EventCard from "../components/EventCard";
import RegisterEvent from "../components/RegisterEvent";
import { useState } from "react";
import CreateEvent from "../components/CreateEvent";
 
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

export default function Events() {
  const { loading, error, data } = useQuery(GET_EVENTS);
  const [showEventCreate, setShowEventCreate] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [regEvent, setRegEvent] = useState(null); 
  const [visible, setVisible] = useState(2);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ display:'flex', justifyContent:"space-around", maxWidth:"100%", padding: "20px" }}>
      <div style={{ padding: "20px", width: "33%" }}>
        <div>
          <h1 style={{margin: "0px"}}>Events</h1>
        </div> 
        <div className="divider"></div>     
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems:"center", width: "100%" }}>
          {data.events.slice(0, visible).map((event) => (       
            <EventCard event={event} key={event.id} register={()=>{setRegEvent(event);setShowRegister(true);}}/>          
          ))}
        </div>
        {visible < data.events.length && (
          <button
            onClick={() => setVisible((prev) => prev + 2)}
            className="create-event-btn"
          >
            Load More
          </button>
        )}
      </div>
      {showRegister && <RegisterEvent event={regEvent} hideRegister={()=>setShowRegister(false)} /> }
      {showEventCreate && <CreateEvent hideCreate={()=>setShowEventCreate(false)}/> }
      
      <button onClick={()=>setShowEventCreate(true)} className="add-event-btn">+ <span>Post Event</span></button>
    </div>
  );
}
