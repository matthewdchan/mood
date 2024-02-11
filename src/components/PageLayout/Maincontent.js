import React from "react";
import { useJournalContext } from '../../JournalContext';
import { JournalProvider } from '../../JournalContext';
import axios from 'axios';

import Card from '../Card/Card';
import Journal from '../Journal';
import './Maincontent.css';

//function Maincontent () {
function Maincontent() {
    const { journalblocks, setJournalblocks } = useJournalContext();

    const deleteJournal = async (id) => {
        await axios
        .delete(`http://localhost:4000/journals/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            // Update the state to remove the deleted item
            setJournalblocks((prevJournalblocks) => {
                return prevJournalblocks.filter((journalblock) => journalblock._id !== id);
            });
        })
        .catch((err) => {
            console.log('Error in deleting item', err);
        });
    };
    return (
        <div className="maincontent-container">
        <Card className="journal-wrapper">
            {journalblocks.map((journalblock) => (
                <Journal
                    className="journal-block"
                    title={journalblock.title}
                    date={journalblock.date}
                    text={journalblock.text}
                    id={journalblock._id}
                    onDelete={() => deleteJournal(journalblock._id)} // passing delete function as a prop to journal
                />
            ))}
        </Card>
        </div>
    );
};
export default Maincontent;
