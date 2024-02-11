import React from "react";
import Card from '../Card';

//function Maincontent () {
function Maincontent({ jounralBlocks }) {
    return (
        <main>
            {jounralBlocks.map((entry, index) => (
                <Card key={index} entry={entry} />
            ))}
        </main>
    );
};
export default Maincontent;
