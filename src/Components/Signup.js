import React from 'react'
import { connect } from 'react-redux'
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
    console.log("create user is firing")
    this.props.createUser(this.state)
  }

  render(){
    // console.log("what are my props in signup?", this.props)
    return(
      <Form unstackable>
        <Form.Group widths={2}>
          <Form.Input onChange={this.onChange} name='username' placeholder='Username' value={this.state.username} />
          <Form.Input onChange={this.onChange} name='password' type='password' placeholder='Password' value={this.state.password}/>
        </Form.Group>
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Button onClick={this.createUser}>Submit</Button>
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    user: state.user
  }
}

export default connect(mapStateToProps, {createUser})(Signup)
