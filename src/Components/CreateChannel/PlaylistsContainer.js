import React from 'react'
import Playlist from './Playlist'
import { Segment, List, Container } from 'semantic-ui-react'


class PlaylistsContainer extends React.Component{
  render(){
    return(
      <Segment>
      <Segment>
        <div>
          <Container textAlign='left'>
            <h1> Playlists... </h1>
          </Container>
        </div>
      </Segment>
      <List divided relaxed>
        {<Playlist/>}
        {<Playlist/>}
        {<Playlist/>}
        {<Playlist/>}
        {<Playlist/>}
        </List>
      </Segment>
    )
  }
}

export default PlaylistsContainer
