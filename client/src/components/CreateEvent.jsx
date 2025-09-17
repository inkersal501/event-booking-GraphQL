import React, { useState } from "react";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
 
const ADD_EVENT = gql`
  mutation AddEvent($title: String!, $description: String, $date: String!, $location: String!) {
    addEvent(title: $title, description: $description, date: $date, location: $location) {
      id
      title
      date
      location
    }
  }
`;

function CreateEvent({hideCreate}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });

  const [addEvent, { loading, error, data }] = useMutation(ADD_EVENT);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEvent({ variables: formData });
    setFormData({ title: "", description: "", date: "", location: "" }); 
    setTimeout(() => {
      hideCreate(); 
    }, 2000);
  };

  return (
    <div style={{ padding: "20px 40px", width: "33%"  }}>
      <div style={{display:'flex', justifyContent:"space-between", alignItems:"center"}}>
        <h1 style={{ margin: "0px" }}>Post New Event</h1>
        <span onClick={()=>hideCreate()} style={{background:"lawngreen", padding:"4px 8px", borderRadius:"5px",cursor:"pointer"}}>X</span>
      </div>  
      <div className="divider"></div>    
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px", width:"100%" }}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", borderRadius: "7px", border:"1px solid #999" }}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", borderRadius: "7px", border:"1px solid #999" }}
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", borderRadius: "7px", border:"1px solid #999" }}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", borderRadius: "7px", border:"1px solid #999" }}
          />
        </div>
        <div style={{display:"flex",width:"100%"}}>
          <button
            type="submit"
            disabled={loading}
            className="create-event-btn" 
            >
            {loading ? "Posting..." : "Post"}
          </button>
        </div>
        {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
        {data && <p style={{ color: "green" }}>New event posted successfully!</p>}
      </form>
    </div>
  );
}

export default CreateEvent;
