// utilities.js

// Group tickets by user
export const groupTicketsByUser = (tickets) => {
    return tickets.reduce((acc, ticket) => {
      const user = ticket.assignedUser || "Unassigned";
      if (!acc[user]) {
        acc[user] = [];
      }
      acc[user].push(ticket);
      return acc;
    }, {});
  };
  
  // Group tickets by status
  export const groupTicketsByStatus = (tickets) => {
    return tickets.reduce((acc, ticket) => {
      const status = ticket.status || "No Status";
      if (!acc[status]) {
        acc[status] = [];
      }
      acc[status].push(ticket);
      return acc;
    }, {});
  };
  
  // Group tickets by priority
  export const groupTicketsByPriority = (tickets) => {
    return tickets.reduce((acc, ticket) => {
      const priority = ticket.priority || "No Priority";
      if (!acc[priority]) {
        acc[priority] = [];
      }
      acc[priority].push(ticket);
      return acc;
    }, {});
  };
  
  // Sort tickets within groups
  export const sortTickets = (groupedTickets, ordering) => {
    const order = ordering === 'priority' ? ['Urgent', 'High', 'Medium', 'Low', 'No Priority'] : null;
  
    return Object.keys(groupedTickets).reduce((acc, key) => {
      acc[key] = groupedTickets[key].sort((a, b) => {
        if (ordering === 'title') {
          return a.title.localeCompare(b.title);
        }
        if (ordering === 'priority' && order) {
          return order.indexOf(a.priority) - order.indexOf(b.priority);
        }
        return 0;
      });
      return acc;
    }, {});
  };
  