import logo from './logo.svg';
import './App.css';
import Form from './components/Journalform/Form';
import Header from './components/PageLayout/Header'
import { JournalProvider } from './JournalContext';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddJournalView from './components/AddJournal/AddJournalView';

function App() {
  return (
    <JournalProvider>
      <Router>
          <Routes> 
            <Route path='/add-text' element={<AddJournalView/>} />
        </Routes>
    </Router>
    </JournalProvider>
  );
}

export default App;
