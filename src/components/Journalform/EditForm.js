// react imports
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

//axios
import axios from 'axios';
import { useJournalContext } from '../../JournalContext';
import { JournalProvider } from '../../JournalContext';



function EditForm(props) {

  const { id } = useParams();
  const navigate = useNavigate();
  const { journalblocks, setjournalblocks } = useJournalContext();
  
  
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

    useEffect(() => { // fetching data for journal from db based on id
        const encodedId = encodeURIComponent(id);
        
        // server request to get the specific journal and populate form
        axios
        .get(`http://localhost:4000/journals/${encodedId}`)
        .then((res) => {
            console.log(res.data);
            const data = res.data;
            console.log(data);

            setTitle(data.title);
            setDate(data.date);
            setText(data.text);
        })
        .catch((err) => {
            console.log('Error in retrieving item');
        });
    }, [id]);

   const submitHandler = async (event) => {
    event.preventDefault(); 

    const data = { // build updated data from user
      title: enteredTitle,
      date: enteredDate,
      text: enteredText
    };
    // put request because journal already exists in database
    await axios
    .put(`http://localhost:4000/journals/${id}`, data)
    .then((res) => {
        console.log(res);
        console.log(res.data);
        setjournalblocks((prevjournalblocks) => {
            return prevjournalblocks.map((journalblock) => {
                if (journalblock.id === id) {
                    return {
                        ...journalblock,
                        ...data };
                }
                return journalblock;
            });
        });
    })
    .catch((err) => {
        console.log('Error in updating item', err);
    });
navigate('/'); // navigate back to main view after update

/*
setDate('');
setText('');
setTitle('');
*/

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
}

export default EditForm;
