// CSS
//import './Journal.css';

// React 
import React from 'react';

// Needed Components
import Card from './Card/Card';
import Button from './Button'

function Journal(props){

    return(
        <Card className={props.className}>
            <h2>{ props.title }</h2>
            <p> { props.date } </p>
            <p> { props.text } </p>
            <div className="journal-actions">
                <Button onClick={props.onEdit}>Edit</Button>
                 <Button onClick={props.onDelete}>Delete</Button>
            </div>
           
        </Card>
    );
}

export default Journal;