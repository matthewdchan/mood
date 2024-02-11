import React from "react";
import Card from '../Card/Card';
import { useJournalContext } from '../../JournalContext';
import { JournalProvider } from '../../JournalContext';
import Journal from '../Journal';

//function Maincontent () {
function Maincontent() {
    const { journalblocks } = useJournalContext();
    return (
        <Card className="journal-wrapper">
            {journalblocks.map((journalblock) => (
                <Journal
                    className="journal-block"
                    title={journalblock.title}
                    date={journalblock.date}
                    text={journalblock.text}
                    id={journalblock._id}
                />
            ))}
        </Card>
    );
};
export default Maincontent;
