import React from 'react'
import {Link} from "react-router-dom";
import styled from 'styled-components'

// css3buttongenerator.com
const Atags = styled.button`
.btn {
    background: #3498db;
    background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
    background-image: -moz-linear-gradient(top, #3498db, #2980b9);
    background-image: -ms-linear-gradient(top, #3498db, #2980b9);
    background-image: -o-linear-gradient(top, #3498db, #2980b9);
    background-image: linear-gradient(to bottom, #3498db, #2980b9);
    -webkit-border-radius: 28;
    -moz-border-radius: 28;
    border-radius: 28px;
    font-family: Arial;
    color: #ffffff;
    font-size: 20px;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
  }`

const ArtistWrapper = styled.div`
background-color: black;
background-opacity: .1;
`
const ArtistList = (props) => {
    return (
        <div>
            <h2>All Artists</h2>
            {
                props.artists.map((artist) => {
                    return (
                        <ArtistWrapper>
                            <Atags>
                            <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
                            </Atags>
                        </ArtistWrapper>
                    )
                })
            }
        </div>
    )
}

export default ArtistList