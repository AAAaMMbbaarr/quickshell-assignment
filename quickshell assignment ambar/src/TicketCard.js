// TicketCard.js
import React from 'react';

const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <h4>{ticket.title}</h4>
      <p>Priority: {ticket.priority}</p>
      <p>Status: {ticket.status}</p>
      <p>Assigned to: {ticket.assignedUser}</p>
    </div>
  );
};

export default TicketCard;
