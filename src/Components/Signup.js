import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { createUser } from '../Actions'
import { Form, Button } from 'semantic-ui-react'

class Signup extends React.Component{

  state = {
    username: "",
    password: "",
    error: null
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  createUser = () => {
    this.props.createUser(this.state)
    this.props.history.push("/my_station")
  }

  render(){
    return(
      <Form unstackable>
        <Form.Group widths={2}>
          <Form.Input onChange={this.onChange} name='username' label='Username' placeholder='Username' value={this.state.username} />
          <Form.Input onChange={this.onChange} name='password' label='Password' type='password' placeholder='Password' value={this.state.password}/>
        </Form.Group>
        <h4 style={{color: 'red'}}> {this.state.error} </h4>
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Button onClick={this.createUser}>Submit</Button>
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    state: state
  }
}


export default withRouter(connect(mapStateToProps, {createUser})(Signup))
