import React from 'react'
import { Grid } from 'semantic-ui-react'
import FavoritesContainer from './FavoritesContainer'
import ListeningTo from './ListeningTo'
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
                  {<ListeningTo />}
                  {<ChannelsContainer />}
                </Grid.Column>
                <Grid.Column width={5}>
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
