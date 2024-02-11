import React from "react";
import Card from '../Card/Card';
import { useJournalContext } from '../../JournalContext';
import { JournalProvider } from '../../JournalContext';

//function Maincontent () {
function Maincontent({ journalBlocks }) {
    return (
        <main>
            {journalBlocks.map((entry, index) => (
                <Card key={index} entry={entry} />
            ))}
        </main>
    );
};
export default Maincontent;
