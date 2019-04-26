import React from 'react'
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
    let data = {
      username: this.state.username,
      password: this.state.password
    }
    let url = "http://localhost:3000/users"
    let config = {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    }
    fetch(url,config)
    console.log("trololol")
  }

  render(){
    return(
      <Form unstackable>
        <Form.Group widths={2}>
          <Form.Input onChange={this.onChange} name='username' placeholder='Username' value={this.state.username} />
          <Form.Input onChange={this.onChange} name='password' placeholder='Password' value={this.state.password}/>
        </Form.Group>
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Button onClick={this.createUser}>Submit</Button>
      </Form>
    )
  }
}

export default Signup
