import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavWrapper = styled.div`
background-color: rgba(0, 0, 0, 0.4);
`

const NavBar = () => {
    return (
        <NavWrapper>
            <Link to="/">All Artist</Link>
        </NavWrapper>
    );
};

export default NavBar;