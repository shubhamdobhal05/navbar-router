import React from "react";

import {Link} from "react-router-dom";
import styled from "styled-components";

const DivStyle = styled.div`
display: flex;
color: white;
text-align: centre;
`



const Navbar = () => {

   


    return (
        <DivStyle>
            <Link to = "/">Home</Link>
            <Link to = "/contact">Contact-Us</Link>
            <Link to = "/about">About-Us</Link>
            <Link to = "/service">Services</Link>
            <Link to = "/login">Login</Link>
        </DivStyle>
       
        
    )
}


export default Navbar;