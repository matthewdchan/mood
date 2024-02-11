// CSS
import './Header.css';

// React
import React from 'react';

// Needed Components

function Header(props){
    return(
        <header className='header'>
            <h2>mood</h2>
            <div className="button-wrapper">
                { props.children }  
            </div>          
        </header>
    );
}

export default Header;