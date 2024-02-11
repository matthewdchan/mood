//dependencies
import React from "react";
import { Link } from 'react-router-dom';

// local imports
import  Header  from "../PageLayout/Header";
import  Form from "../Journalform/AddForm";
import  Footer  from "../PageLayout/Footer";
import Maincontent from "../PageLayout/Maincontent";

function Main() {
    return (
        <>
            <Header> 
                <Link to='/add-item'>Add new Entry</Link>
            </Header>
            <Maincontent> </Maincontent>
            <Footer> </Footer>
        </>
    )
};

export default Main;

// to be filled in with journal wrapper