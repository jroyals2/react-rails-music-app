import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SongList extends Component {
    render() {
        return (
            <div>
                <div>{this.props.songs.map((song) => {
                  return (
                      <div>
                    <Link to={`/artists/${this.props.artist.id}/songs/${song.id}`}>{song.title}</Link>
                    </div>
                )
               })}</div>
            </div>
        );
    }
}

export default SongList;