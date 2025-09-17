import React from 'react'

function EventCard({event, register}) {
  return (
    <div className="events-card">
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
        <div className="register-block">
            <button onClick={()=>register()}>Register Now</button>
        </div>
    </div>
  )
}

export default EventCard;