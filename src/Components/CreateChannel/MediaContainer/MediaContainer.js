import React from 'react'
import ArtistContainer from './ArtistContainer'
import AlbumContainer from './AlbumContainer'
import SongContainer from './SongContainer'
import MediaSearchForm from '../MediaSearchForm'
import { Segment, List, Container, Grid } from 'semantic-ui-react'


class MediaContainer extends React.Component{
  render(){
    return(
      <Segment>
        <MediaSearchForm />
        <Grid.Row >
          <Segment>
            Artists
            {<ArtistContainer/>}
          </Segment>
        </Grid.Row >
        <Grid.Row >
          <Segment>
            Songs
            {<SongContainer/>}
          </Segment>
        </Grid.Row >
        <Grid.Row >
          <Segment>
            Albums
            {<AlbumContainer/>}
          </Segment>
        </Grid.Row >
      </Segment>
    )
  }
}

export default MediaContainer
