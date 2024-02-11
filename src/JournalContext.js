import { createContext, useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import axios from 'axios';

/*
 A global state variable for the journal array
 used throughout every view in the app to ensure consistency
 and proper updates on change
*/

const JournalContext = createContext();

export const JournalProvider = ( {children}) => {
    const [journalblocks, setjournalblocks] = useState([]);

    useEffect(() => {
        console.log('Context Journalblocks: ', journalblocks);
        axios.get('http://localhost:4000/journals')
        .then((response) => {
          setjournalblocks(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
    , []);

    return (
        <JournalContext.Provider value={{journalblocks, setjournalblocks}}>
            {children}
        </JournalContext.Provider>
    );
};

export const useJournalContext = () => {
    return useContext(JournalContext);
};