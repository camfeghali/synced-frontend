import React from 'react'
import { Form, Button } from 'semantic-ui-react'

class Login extends React.Component{
  render(){
    return(
      <Form unstackable>
        <Form.Group widths={2}>
          <Form.Input label='First name' placeholder='First name' />
          <Form.Input label='Last name' placeholder='Last name' />
        </Form.Group>
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default Login
