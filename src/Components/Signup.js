import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { createUser } from '../Actions'
import { Form, Button } from 'semantic-ui-react'

class Signup extends React.Component{

  state = {
    username: "",
    password: ""
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  createUser = () => {
    this.props.createUser(this.state)
    this.props.history.push("/my_station")
  }

  render(){
    // console.log("what are my props in signup?", this.props)
    return(
      <Form unstackable>
        <Form.Group widths={2}>
          <Form.Input onChange={this.onChange} name='username' label='Username' placeholder='Username' value={this.state.username} />
          <Form.Input onChange={this.onChange} name='password' label='Password' type='password' placeholder='Password' value={this.state.password}/>
        </Form.Group>
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Button onClick={this.createUser}>Submit</Button>
      </Form>
    )
  }
}


export default withRouter(connect(null, {createUser})(Signup))
