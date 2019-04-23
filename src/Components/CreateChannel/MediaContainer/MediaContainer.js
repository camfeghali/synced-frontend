import React from 'react'
import ArtistContainer from './ArtistContainer'
import AlbumContainer from './AlbumContainer'
import SongContainer from './SongContainer'
import MediaSearchForm from '../MediaSearchForm'
import { Segment, Grid } from 'semantic-ui-react'


class MediaContainer extends React.Component{
  render(){
    return(
      <Segment>
        <Grid.Row >
        <MediaSearchForm />
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
