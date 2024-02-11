// CSS
import './Header.css';

// React
import React from 'react';

// Needed Components

function Header(props){
    return(
        <header className='header'>
            <h2>moo.d</h2>
            <p>“To anyone out there who’s hurting — it’s not a sign of weakness to ask for help. It’s a sign of strength.”</p>
            <p> - Barack Obama </p>
            <p>National Suicide Prevention Lifeline: 988 or 1-800-273-8255 (TALK)</p>
            <div className="button-wrapper">
                { props.children }  
            </div>          
        </header>
    );
}

export default Header;