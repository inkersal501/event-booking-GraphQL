import React, { useState } from "react";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";

const REGISTER_EVENT = gql`
  mutation RegisterEvent($eventId: ID!, $name: String!, $email: String!) {
    addAttendee(eventId: $eventId, name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

function RegisterEvent({ event, hideRegister }) {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const [registerEvent, { loading, error, data }] = useMutation(REGISTER_EVENT);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerEvent({ variables: { eventId: event.id, ...formData } });
    setFormData({ name: "", email: "" });
    setTimeout(() => {
      hideRegister(); 
    }, 2000);    
  };

  return (
    <div style={{ padding: "20px 40px", width: "33%" }}> 
      <div style={{display:'flex', justifyContent:"space-between", alignItems:"center"}}>
        <h1 style={{ margin: "0px" }}>Register for Event</h1>
        <span onClick={()=>hideRegister()} style={{background:"lawngreen", padding:"4px 8px", borderRadius:"5px",cursor:"pointer"}}>X</span>
      </div>  
      <div className="divider"></div> 
      <div>
        <p style={{margin: "0xp"}}>Event : {event.title}</p>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", borderRadius: "7px", border:"1px solid #999" }}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", borderRadius: "7px", border:"1px solid #999" }}
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={loading}
            className="create-event-btn"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </div>        
        {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
        {data && <p style={{ color: "green" }}>Registered successfully!</p>}
      </form>
    </div>
  );
}

export default RegisterEvent;
