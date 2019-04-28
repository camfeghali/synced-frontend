import React from 'react'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import FavoritesContainer from './FavoritesContainer'
import ListeningTo from './ListeningTo'
import StationsContainer from './StationsContainer'

class JoinChannel extends React.Component{
  render(){
    return(
      <div>
      <Grid divided='vertically'>
        <Grid.Row >
          <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column width={14}>
            <div style={{ height:'80em'}}>
            <Grid celled style={{borderStyle: 'solid', borderColor:'grey', boxShadow: '0px 0px 35px 2px grey'}}>
              <Grid.Row>
                <Grid.Column width={11}>
                  {<ListeningTo />}
                  {<StationsContainer />}
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
    state: state
  }
}

export default connect(mapStateToProps)(JoinChannel)
