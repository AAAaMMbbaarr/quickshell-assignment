// KanbanBoard.js
import React from 'react';
import { groupTicketsByUser, groupTicketsByStatus, groupTicketsByPriority, sortTickets } from './utilities';
import KanbanColumn from './KanbanColumn';

const KanbanBoard = ({ tickets, grouping, ordering }) => {
  let groupedTickets;
  if (grouping === 'user') {
    groupedTickets = groupTicketsByUser(tickets);
  } else if (grouping === 'status') {
    groupedTickets = groupTicketsByStatus(tickets);
  } else if (grouping === 'priority') {
    groupedTickets = groupTicketsByPriority(tickets);
  }

  const sortedTickets = sortTickets(groupedTickets, ordering);

  return (
    <div className="kanban-board">
      {Object.keys(sortedTickets).map((group, index) => (
        <KanbanColumn key={index} title={group} tickets={sortedTickets[group]} />
      ))}
    </div>
  );
};

export default KanbanBoard;
