import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Container,
  Message,
  Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            jwt: ''
        }
    }

    handleLogin = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    setCurrentUser = () => {
        let logUser = {
            email: this.state.email,
            password: this.state.password
        }
        fetch('http://localhost:3000/api/v1/login', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accept: "application/json"
            },
            body: JSON.stringify({
                user: logUser
            })
        })
        .then(resp => resp.json())
        // .then(console.log)
        .then(data => {
            if(data.jwt) {
                localStorage.jwt = data.jwt
                localStorage.name = data.user.name
                window.location.href = '/profile'
            }
            else {
                alert(data.error)
                window.location.href = '/login'
            }
        })
    }

    render() {
        return (
            <div>
                <Container text style={{ marginTop: '10em', marginBottom: '10em' }}>
                    <Header>Welcome! Please Login Below.</Header>
                    <Grid centered columns={2}>
                        <Grid.Column>
                        {/* <Header as="h2" textAlign="center">
                            Login
                        </Header> */}
                        <Segment>
                            <Form size="large">
                            <Form.Input
                                fluid
                                icon="user"
                                name="email"
                                onChange={this.handleLogin}
                                iconPosition="left"
                                placeholder="Email address"
                            />
                            <Form.Input
                                fluid
                                icon="lock"
                                name="password"
                                onChange={this.handleLogin}
                                iconPosition="left"
                                placeholder="Password"
                                type="password"
                            />

                            <Button color="blue" fluid size="large" onClick={this.setCurrentUser}>
                                Login
                            </Button>
                            </Form>
                        </Segment>
                        <Message>
                            Not registered yet? <Link to='/userform'>Sign Up</Link>
                        </Message>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        )
    }

}