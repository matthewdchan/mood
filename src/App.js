import './App.css';
import { useJournalContext, JournalProvider } from './JournalContext';
import AddJournalView from './components/AddJournal/AddJournalView';
import EditJournalView from './components/EditJournal/EditJournalView';
import Main from './components/MainView/Main';
import ErrorPage from './components/ErrorView/ErrorPage';

// dependency imports
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [journalBlocks, setjournalBlocks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/journals')
    .then(response => {
      setjournalBlocks(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, []) //useEffect

  return (
    <JournalProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/add-item' element={<AddJournalView />} />
            <Route path='/edit-item' element={<EditJournalView />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>
    </JournalProvider>
  );
}

export default App;
