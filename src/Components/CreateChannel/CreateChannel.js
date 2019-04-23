import React from 'react'
import MediaPlayer from './MediaPlayer'
import MediaContainer from './MediaContainer/MediaContainer'
import PlaylistsContainer from './PlaylistsContainer'
import { Grid } from 'semantic-ui-react'


class CreateChannel extends React.Component{
  render(){
    return(
      <div>
      <Grid divided='vertically'>
        <Grid.Row >
          <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column width={14}>
            <div style={{ height:'80em', borderStyle: 'solid'}}>
            <Grid celled>
              <Grid.Row>
                <Grid.Column width={11}>
                  {/* Add Currently Listening to Component here */}
                  {<MediaPlayer />}
                  {/* Add Search Component here */}
                  {/* Add Open Channels Component here */}
                  {<MediaContainer/>}
                </Grid.Column>
                <Grid.Column width={5}>
                {/* Add Playlist component here */}
                {<PlaylistsContainer />}
                </Grid.Column>
              </Grid.Row>
              </Grid>
            </div>
          </Grid.Column>
          <Grid.Column width={1}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    )
  }
}

export default CreateChannel
