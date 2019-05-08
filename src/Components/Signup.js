import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { createUser } from '../Actions'
import { Form, Button, Message, Grid, Header, Image, Segment } from 'semantic-ui-react'
import logo from'./logo1.png';

class Signup extends React.Component{

  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  createUser = () => {
    this.props.createUser(this.state)
    this.props.history.push("/lobby")
  }

  directToLogin = () => {
    console.log("LOGIN FIRING!!!!!!!!!!!!!!!")
    this.props.history.push("/login")
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
            Signup
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
                onChange={this.handleChange} name='password' label='Password'
              />

              <Button style={{backgroundColor:'rgba(0, 48, 255, 0.9)', color:'white'}} fluid size='large' onClick={this.createUser} >
                Create account
              </Button>
            </Segment>
          </Form>
          <Message style={{color:'white', background:'transparent', borderColor:'rgba(255,127,128, 0)'}} onClick={this.directToLogin}>
            Already have an account ? <a style={{color:'rgba(0, 48, 255, 0.9)'}}>Log in</a>
          </Message>
        </Grid.Column>
      </Grid>
      </div>
    )
  }
}


export default withRouter(connect(null, {createUser})(Signup))
