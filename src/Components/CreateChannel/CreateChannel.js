import React from 'react'
import { connect } from 'react-redux'
import { goOffAir } from '../../Actions'
import MediaPlayer from './Mediaplayer'
import MediaContainer from './MediaContainer/MediaContainer'
import PlaylistsContainer from './PlaylistsContainer'
import { Grid } from 'semantic-ui-react'


class CreateChannel extends React.Component{

  componentWillUnmount(){
    this.props.goOffAir(this.props.username)
  }

  render(){
    return(
      <div>
      <Grid divided='vertically' >
        <Grid.Row >
          <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column width={14} style={{background: 'transparent'}} >
            <div style={{ height:'80em'}}>
            <Grid style={{marginTop:'5em'}}>
              <Grid.Row>
                <Grid.Column width={11} >
                  {/* Add Currently Listening to Component here */}
                  {<MediaPlayer />}
  
                  {/* Add Search Component here */}
                  {/* Add Open Channels Component here */}
                  {<MediaContainer/>}
                </Grid.Column>
                <Grid.Column width={5}>
                <div className="line"> </div>
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

const mapStateToProps = (state) => {
  return {
    stationId: state.station.broadcast.stationId,
    username: state.user.username,
    listeningTo: state.station.broadcast.trackName
  }
}

export default connect(mapStateToProps, { goOffAir })(CreateChannel)
