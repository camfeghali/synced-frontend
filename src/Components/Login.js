import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import logo from'./logo1.png';
import { loginUser } from '../Actions'
import { Form, Button, Grid, Message, Segment, Header, Image } from 'semantic-ui-react'


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

  directToSignup = () => {
    this.props.history.push("/signup")
  }

  render(){
    return(

      <div className='login-form'>

      <style>{`
         body > div,
         body > div > div,
         body > div > div > div.login-form {
           height: 100%;
         }
       `}
      </style>
      <Grid textAlign='center' style={{ height: '80%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450, background:"transparent" }}>
          <Header as='h2' style={{color:"white", fontFamily: 'Fjalla One', fontSize:'36px'}} textAlign='center' >
            <Image src={logo}/>
            Welcome back!
          </Header>
          <Form size='large'>
            <Segment stacked style={{background:'transparent', borderColor:'transparent'}}>
              <Form.Input style={{color:'blue'}} fluid icon='user' iconPosition='left' onChange={this.handleChange} name='username' label='Username' placeholder='First name' />
              <Form.Input
                style={{color:'blue'}}
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                autofocus
                onChange={this.handleChange} name='password' label='Password' type='password' placeholder='Password'
              />

              <Button style={{backgroundColor:'rgba(0, 48, 255, 0.9)', color:'white'}} fluid size='large' onClick={this.handleSubmit} >
                Login
              </Button>
            </Segment>
          </Form>
          <Message style={{color:'white', background:'transparent', borderColor:'rgba(255,127,128, 0)'}} onClick={this.directToSignup}>
            Don't have an account ? <a style={{color:'rgba(0, 48, 255, 0.9)'}}>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
      </div>
    )
  }
}
// {/* <Form unstackable>
//   <Form.Group widths={2}>
//     <Form.Input onChange={this.handleChange} name='username' label='Username' placeholder='First name' />
//     <Form.Input onChange={this.handleChange} name='password' label='Password' type='password' placeholder='Password' />
//   </Form.Group>
//   <Form.Checkbox label='I agree to the Terms and Conditions' />
//   <Button onClick={this.handleSubmit} type='submit'>Sign In</Button>
// </Form>
// */}
export default withRouter(connect(null, { loginUser })(Login))
