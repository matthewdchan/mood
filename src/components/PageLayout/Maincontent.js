import React from "react";
import Card from '../components/Card';

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
