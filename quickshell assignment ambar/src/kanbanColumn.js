// KanbanColumn.js
import React from 'react';
import TicketCard from './TicketCard';

const KanbanColumn = ({ title, tickets }) => {
  return (
    <div className="kanban-column">
      <h3>{title}</h3>
      <div className="ticket-list">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
