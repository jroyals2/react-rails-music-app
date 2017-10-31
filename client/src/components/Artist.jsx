import React, {Component} from 'react'
import axios from 'axios'
import SongList from './SongList'

class Artist extends Component {

   state = {
       artist: {},
       songs: []
   }

   async componentWillMount() {
       try {
        const artistId = this.props.match.params.artistId
        const response = await axios.get(`/api/artists/${artistId}/songs`)

        this.setState({songs: response.data})
       } catch(error){
        console.log(error)
       }

       try {
           const artistId = this.props.match.params.artistId
           const response = await axios.get(`/api/artists/${artistId}`)

           this.setState({artist: response.data})

       } catch(error) {
           console.log(error)
       }

   }

   render() {
       return (
           <div>
               <div>{this.state.artist.name}</div>
               <div>{this.state.artist.nationality}</div>
               <img src={this.state.artist.photo_url} alt=""/>
               <h1>Songs</h1>
                <SongList 
                songs={this.state.songs}
                artist={this.state.artist}
                />
           </div>
       )
   }
}

export default Artist