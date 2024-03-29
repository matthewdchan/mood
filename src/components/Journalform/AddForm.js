import React, { useState } from 'react';
import axios from 'axios';
import { useJournalContext } from '../../JournalContext';
import { JournalProvider } from '../../JournalContext';
import moment from 'moment';
import './Form.css';


function AddForm() {
  const currentDate = moment().format('MM/DD/YYYY');
  const {setjournalblocks} = useJournalContext();
  
  const [enteredTitle, setTitle] = useState('');
  const [enteredDate, setDate] = useState(currentDate);
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

   const submitHandler = async (event) => {
    event.preventDefault(); 

    const newJournal = {
      title: enteredTitle,
      date: enteredDate,
      text: enteredText
    };
    
    await axios
    .post('http://localhost:4000/journals', newJournal)
    .then((res) => {
        console.log(res);
        console.log(res.data);
        setjournalblocks((prevjournalblocks) => [...prevjournalblocks, res.data]); // use res.data to ensure we have a valid id from the server
        //navigate('/auth-user');
    })
    .catch((err) => {
        console.log('Error in creating new item', err);
    });


    setDate('');
    setText('');
    setTitle('');

   };

  return (
    <div className="Form">
      <form id="journalPart" onSubmit={submitHandler}> 
        <label > Title: </label>
        <input type="text" value={enteredTitle} onChange={titleHandler}></input>
        <br></br>
        <label > Date: </label>
        <input type="text" value={enteredDate} onChange={dateHandler}></input>
        <br></br>
        <label> Journal Entry: </label>
        <input type="text" value={enteredText} onChange={textHandler}></input>
        <br></br>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default AddForm;
