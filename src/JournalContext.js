import { useContext } from "react";
import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

const JournalContext = createContext(); 


export const JournalProvider = ( {children} ) => {
    const [journalBlocks, setjournalBlocks] = useState([]);

   useEffect(() => {
    console.log('Context Journal:', journalBlocks);
    axios.get('http://localhost:4000/journals')
    .then((response) => {
        setjournalBlocks(response.data);
    })
    .catch(error => {
        console.log(error);
    });
   }
   , []);
    
   return (
    <JournalContext.Provider value={{journalBlocks, setjournalBlocks}}>
        {children}
    </JournalContext.Provider>
   );
};
    export const useJournalContext = () => {
        return useContext(JournalContext);
    };