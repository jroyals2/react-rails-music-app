import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const ButtonLink = styled.button`
    border-top: 1px solid #96d1f8;
    background: #65a9d7;
    background: -webkit-gradient(linear, left top, left bottom, from(#3e779d), to(#65a9d7));
    background: -webkit-linear-gradient(top, #3e779d, #65a9d7);
    background: -moz-linear-gradient(top, #3e779d, #65a9d7);
    background: -ms-linear-gradient(top, #3e779d, #65a9d7);
    background: -o-linear-gradient(top, #3e779d, #65a9d7);
    padding: 5px 10px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    -webkit-box-shadow: rgba(0,0,0,1) 0 1px 0;
    -moz-box-shadow: rgba(0,0,0,1) 0 1px 0;
    box-shadow: rgba(0,0,0,1) 0 1px 0;
    text-shadow: rgba(0,0,0,.4) 0 1px 0;
    color: white;
    font-size: 14px;
    text-decoration: none;
    vertical-align: middle;
`
class SongList extends Component {
    render() {
        return (
            <div>
                <div>{this.props.songs.map((song) => {
                  return (
                      <ButtonLink>
                    <Link to={`/artists/${this.props.artist.id}/songs/${song.id}`}>{song.title}</Link>
                    </ButtonLink>
                )
               })}</div>
            </div>
        );
    }
}

export default SongList;