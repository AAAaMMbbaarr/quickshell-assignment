// App.js
import React, { useState } from 'react';
import KanbanBoard from './KanbanBoard';
import './App.css';

const tickets = [
  { id: 1, title: "Create Onboarding Tutorial", priority: "High", status: "In Progress", assignedUser: "Abhijit" },
  { id: 2, title: "Implement Email Notification", priority: "No Priority", status: "Backlog", assignedUser: "Arbaaz" },
  { id: 3, title: "Optimize Database Queries", priority: "Medium", status: "To Do", assignedUser: "Akanksha" },
  // More sample data here
];

const App = () => {
  const [grouping, setGrouping] = useState('priority');
  const [ordering, setOrdering] = useState('priority');

  return (
    <div className="app-container">
      <KanbanBoard tickets={tickets} grouping={grouping} ordering={ordering} />
    </div>
  );
};

export default App;
