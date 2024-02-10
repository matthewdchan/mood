import React from "react";
import  Main from "./Main";

const Maincontent = (props) => {
    return (
        <Main>
            {props.children}
        </Main>
    );
};
export default Maincontent;