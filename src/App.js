import logo from './logo.svg';
import './App.css';
import Form from './components/Journalform/Form';
import Header from './components/PageLayout/Header'
import { useJournalContext } from './JournalContext';

function App() {
  return (
    <div className="App">
    <JournalProvider>
        {children}
        <Form/>
    </JournalProvider>

    </div>
  );
}

export default App;
