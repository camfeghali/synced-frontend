import React from 'react'
import ArtistContainer from './ArtistContainer'
import AlbumContainer from './AlbumContainer'
import SongContainer from './SongContainer'
import MediaSearchForm from '../MediaSearchForm'
import { Segment, Grid } from 'semantic-ui-react'


class MediaContainer extends React.Component{
  render(){
    return(
      <Segment style={{borderStyle: 'solid', borderColor:'grey', boxShadow: '0px 0px 2px 1px grey'}}>
        <Grid.Row >
        <MediaSearchForm />
          <Segment style={{borderStyle: 'solid', borderColor:'grey', boxShadow: '0px 0px 2px 1px grey', height:'250px'}}>
            Songs
            {<SongContainer/>}
          </Segment>
        </Grid.Row >
        <Grid.Row >
          <Segment style={{borderStyle: 'solid', borderColor:'grey', boxShadow: '0px 0px 2px 1px grey', height:'250px'}}>
            Artists
            {<SongContainer/>}
            {<ArtistContainer/>}
          </Segment>
        </Grid.Row >
        <Grid.Row >
          <Segment style={{borderStyle: 'solid', borderColor:'grey', boxShadow: '0px 0px 2px 1px grey'}}>
            Albums
            {<AlbumContainer/>}
          </Segment>
        </Grid.Row >
      </Segment>
    )
  }
}

export default MediaContainer
