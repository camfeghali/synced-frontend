import React from 'react'
import { Grid } from 'semantic-ui-react'
import FavoritesContainer from './FavoritesContainer'
import ListeningTo from './ListeningTo'
import ChannelSearchForm from './ChannelSearchForm'
import ChannelsContainer from './ChannelsContainer'

class JoinChannel extends React.Component{
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
                  <div> Hey </div>
                  {/* Add Currently Listening to Component here */}
                  {<ListeningTo />}
                  {/* Add Search Component here */}
                  {<ChannelSearchForm />}
                  {/* Add Open Channels Component here */}
                  {<ChannelsContainer />}
                </Grid.Column>
                <Grid.Column width={5}>
                {/* Add Favorites component here */}
                {<FavoritesContainer />}
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

export default JoinChannel
