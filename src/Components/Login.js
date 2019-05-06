import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { loginUser } from '../Actions'
import { Form, Button } from 'semantic-ui-react'

class Login extends React.Component{

  state = {
    username: null,
    password: null
  }

  handleSubmit = (state) => {
    this.props.loginUser(this.state)
    this.props.history.push("/my_station")
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    return(
      <Form unstackable>
        <Form.Group widths={2}>
          <Form.Input onChange={this.handleChange} name='username' label='Username' placeholder='First name' />
          <Form.Input onChange={this.handleChange} name='password' label='Password' type='password' placeholder='Password' />
        </Form.Group>
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Button onClick={this.handleSubmit} type='submit'>Sign In</Button>
      </Form>
    )
  }
}

export default withRouter(connect(null, { loginUser })(Login))
