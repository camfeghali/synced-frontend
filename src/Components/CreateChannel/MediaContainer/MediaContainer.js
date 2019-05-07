import React from 'react'
import ArtistContainer from './ArtistContainer'
import AlbumContainer from './AlbumContainer'
import SongContainer from './SongContainer'
import MediaSearchForm from '../MediaSearchForm'
import { Segment, Grid } from 'semantic-ui-react'


class MediaContainer extends React.Component{
  render(){
    return(
      <Segment style={{background:'transparent'}}>
        <Grid.Row style={{background:'transparent'}}>
        <MediaSearchForm style={{background:'transparent'}}/>
          <Segment style={{background:'transparent', height:'250px'}}>
            {<SongContainer/>}
          </Segment>
        </Grid.Row >
      </Segment>
    )
  }
}

export default MediaContainer
