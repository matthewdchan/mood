import React, { useState } from 'react';


const Form = ({ addedData }) => {
  const [enteredTitle, setTitle] = useState('');
  const [enteredDate, setDate] = useState('');
  const [enteredText, setText] = useState('');

   const titleHandler = (event) => {
    setTitle(event.target.value);
   };

   const dateHandler = (event) => {
    setDate(event.target.value);
   };

   const textHandler = (event) => {
    setText(event.target.value);
   };

   const submitHandler = (event) => {
    event.preventDefault(); 

    const newJournal = {
      title: enteredTitle,
      date: enteredDate,
      text: enteredText
    };


    setDate('');
    setText('');
    setTitle('');

   };

  return (
    <div className="Form">
      <form id="journalPart"> 
        <label for="title"> Title: </label>
        <input type="text"></input>
        <br></br>
        <label for="date"> Date: </label>
        <input type="text"></input>
        <br></br>
        <label for="entry"> Journal Entry: </label>
        <input type="text"></input>
        <br></br>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default Form;
