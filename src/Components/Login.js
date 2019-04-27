import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../Actions'
import { Form, Button } from 'semantic-ui-react'

class Login extends React.Component{

  state = {
    username: null,
    password: null
  }

  handleSubmit = (state) => {
    console.log("on submit, i send this state: ", this.state)
    console.log("my props are: ", this.props)
    this.props.loginUser(this.state)
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
        <Button onClick={this.handleSubmit} type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default connect(null, { loginUser })(Login)
