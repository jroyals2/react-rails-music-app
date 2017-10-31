import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class Song extends Component {
    state = {
        song: {}
    }
    async componentWillMount() {
        try {
         const artistId = this.props.match.params.artistId
         const songId = this.props.match.params.songId
         const response = await axios.get(`/api/artists/${artistId}/songs/${songId}`)
 
         this.setState({song: response.data})
        } catch(error){
         console.log(error)
        }
 
    }
    render() {
        return (
            <div>
                <Link to={`/artists/${this.props.match.params.artistId}`}>Back to the Song list</Link>
                <h1>{this.state.song.title}</h1>
                <h3>{this.state.song.album}</h3>
                <audio controls src={this.state.song.preview_url}/>
            </div>
        );
    }
}

export default Song;