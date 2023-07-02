import React from 'react';
import { Header ,Button, Menu, Segment, Form, Grid, Container } from 'semantic-ui-react';
import {login , register } from './../utils/api'

class Home extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            activeItem : 'login',
            email : '',
            name : '',
            password : '',
            repassword : '',

        }  
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleLogin = () => {
        const {email , password} = this.state;
        if(email && password){
          let body = {
              email,
              password
          }
          this.props.history.push('/dashboard');
        //   login(body,(data)=>{
        //       localStorage.setItem('accessToken' , data.accessToken);
        //       localStorage.setItem('refershToken' , data.refershToken);
        //       this.props.history.push('/dashboard');

        //   })
        }
        else{
            alert('All fields are required')
        }
    }
    handleRegister = () => {
        const {email , password , repassword , name} = this.state;
        if(email && password && repassword && name){
            if(password === repassword)
            {
                let body = {
                    email,
                    password,
                    name
                }
                register(body,(data)=>{

                })
                alert(`You have been successfully registered`)

            }
            else
                alert(`Passwords didn't match`)
          }
          else{
                alert('All fields are required')
          }
    }

    render(){
        const {activeItem} = this.state;
        return (
            <Container >
                <Grid style={{margin:0 , marginTop : 20}} centered>
                    <Header as="h1">Issue Tracker</Header>
                </Grid>
            <Menu color={'blue'}  fluid widths={2} pointing>
                <Menu.Item
                    name='login'
                    active={activeItem === 'login'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='register'
                    active={activeItem === 'register'}
                    onClick={this.handleItemClick}
                />
            </Menu>
            {
                activeItem === 'login' ? 
                <Segment>
                    <Form>
                        <Form.Input
                            icon='mail'
                            iconPosition='left'
                            label='Email'
                            type="email"
                            placeholder='Email'
                            onChange={(e)=>this.setState({email:e.target.value})}
                        />
                        <Form.Input
                            icon='lock'
                            iconPosition='left'
                            label='Password'
                            type='password'
                            placeholder='Password'
                            onChange={(e)=>this.setState({password:e.target.value})}
                        />
                        <Button content='Login' primary onClick={this.handleLogin} />
                    </Form>
                </Segment>
                :
                <Segment>
                    <Form>
                        <Form.Input
                            icon='user'
                            iconPosition='left'
                            label='Name'
                            onChange={(e)=>this.setState({name:e.target.value})}
                            placeholder='Name'
                        />
                        <Form.Input
                            icon='mail'
                            iconPosition='left'
                            label='Email'
                            type="email"
                            required
                            onChange={(e)=>this.setState({email:e.target.value})}
                            placeholder='email'
                        />
                        <Form.Input
                            icon='lock'
                            iconPosition='left'
                            label='Password'
                            type='password'
                            required
                            onChange={(e)=>this.setState({password:e.target.value})}
                            placeholder='Enter Password'
                        />
                        <Form.Input
                            icon='lock'
                            iconPosition='left'
                            label='Confirm Password'
                            placeholder='Re-enter Password'
                            required
                            onChange={(e)=>this.setState({repassword:e.target.value})}
                            type='password'
                        />
                        <Button content='Register' primary onClick={this.handleRegister}/>
                    </Form>
            </Segment>
            }
        </Container>
        )
    }  
 
}

export default Home;
