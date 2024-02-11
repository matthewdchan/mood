import React from "react";
import { Link } from "react-router-dom";

import  Header  from "../PageLayout/Header";
import  AddForm from "../Journalform/AddForm";
import  Footer  from "../PageLayout/Footer";
import  Button from "../Button";

function AddJournalView () {
    return (
        <>

        <Header>

           <Link to='/'>Return to Journal List</Link> 
            
         </Header>

        <AddForm> </AddForm>

        <Footer> </Footer>

        </>
    )

};

export default AddJournalView;