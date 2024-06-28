import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bulma/css/bulma.css'
// react router
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";// import reportWebVitals from './reportWebVitals';

import Tickets from './components/ticket/tickets';
import NotFound from './components/not-found.js';
import sampleTickets from './data/tickets.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Routes>
        <Route path='project/:projectName/Tickets' element={<Tickets tickets={sampleTickets} />} />
        <Route path='project/:projectName/Test/:id' element={<p>To Do... Test Details</p>} />
        <Route path='project/:projectName/Tests' element={<p>To Do... All tests in a project</p>} />
        <Route path='project/:projectName' element={<p>To Do...Project Details</p>} />
        <Route path='project/:projectName/areas' element={<p>To Do...Project Details</p>} />
        <Route path='project/:projectName/:area/tests' element={<p>To Do...Project Details</p>} />
        <Route path='projects' element={<p>To Do...All Your Projects</p>} />

        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
