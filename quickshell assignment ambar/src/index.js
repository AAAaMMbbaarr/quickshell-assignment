// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import KanbanBoard from './KanbanBoard';
import './App.css';

const tickets = [
  // Sample data
  { id: 1, title: "Create Onboarding Tutorial", priority: "High", status: "In Progress", assignedUser: "Abhijit" },
  { id: 2, title: "Implement Email Notification", priority: "No Priority", status: "Backlog", assignedUser: "Arbaaz" },
  // Add more ticket data
];

const App = () => {
  return (
    <KanbanBoard tickets={tickets} grouping="priority" ordering="priority" />
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
