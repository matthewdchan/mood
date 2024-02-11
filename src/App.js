import './App.css';
import { useJournalContext, JournalProvider } from './JournalContext';
import AddJournalView from './components/AddJournal/AddJournalView';
import Main from './components/MainView/Main';

// dependency imports
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  return (
    <JournalProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/add" element={<AddJournalView />} />
          </Routes>
        </Router>
      </div>
    </JournalProvider>
  );
}

export default App;
