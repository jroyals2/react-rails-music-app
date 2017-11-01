import React, {Component} from 'react'
import axios from 'axios'
import SongList from './SongList'
import styled from 'styled-components'

const PageWrapper = styled.div`
color: yellow;
`
const atags = styled.button`
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
  `

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
           <PageWrapper>
               <div>{this.state.artist.name}</div>
               <div>{this.state.artist.nationality}</div>
               <img className="picture" src={this.state.artist.photo_url} alt=""/>
               <h1>Songs</h1>
                <SongList 
                songs={this.state.songs}
                artist={this.state.artist}
                />
           </PageWrapper>
       )
   }
}

export default Artist