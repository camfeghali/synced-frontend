import React from 'react'
import Station from './Station'
import ChannelSearchForm from './ChannelSearchForm'
import { Segment, List, Container } from 'semantic-ui-react'
import { ActionCableConsumer } from 'react-actioncable-provider'


class FavoritesContainer extends React.Component{

  state = {
    stations: []
  }

  componentDidMount(){
    let url = "http://localhost:3000/stations"
    fetch(url)
    .then(resp => resp.json())
    .then(data => this.setState({stations: data}))
  }

  handleReceived = (data) => {
    this.setState({stations: data.stations})
  }

  render(){
    let stations = this.state.stations.map(station => <Station key={station.id} station={station}/>)
    return(
      <Segment style={{borderStyle: 'solid', borderColor:'grey', boxShadow: '0px 0px 2px 1px grey'}}>
      <ActionCableConsumer channel={{channel: 'LobbyChannel', cat: "piss"}} onReceived={(data) => {this.handleReceived(data)}}/>
      <Segment style={{borderStyle: 'solid', borderColor:'grey', boxShadow: '0px 0px 2px 1px grey'}}>
        <div>
          <Container textAlign='left'>
            <h1> On the airways ... </h1>
          </Container>
        </div>
      </Segment>
      {<ChannelSearchForm />}

      <List relaxed>
        {stations}
        </List>
      </Segment>
    )
  }
}

export default FavoritesContainer
