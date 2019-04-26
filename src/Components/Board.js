import React from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider'

class Board extends React.Component{

  state = {
    myInput: "",
    timeStamp: null,
  }



  handleReceived = () => {
    console.log("Received data biiitch!!")
  }
  handleChange = (e) =>{
    this.setState({myInput: e.target.value})
  }

  handleOnClick = (e) => {
    e.preventDefault()
  }

  render(){
    return(
      <div style={{borderStyle:'solid', borderColor:'red', height:'400px', width:'600px'}}>
        <ActionCableConsumer channel={{channel: 'StationChannel'}} onReceived={(data)=>{this.setState({timeStamp: data.message})}}/>
        <h1>ImageUrl: </h1>
        <input type="text" name="name" value={this.state.myInput} onChange={this.handleChange}/>
        <button type="submit" onClick={this.handleOnClick}> Submit and POST </button>
        <h1>Time Stamp: {this.state.timeStamp}</h1>
      </div>
    )
  }
}

export default Board
