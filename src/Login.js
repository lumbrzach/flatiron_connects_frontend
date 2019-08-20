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
    }

    render() {
        return (
            <div>
                <Container text style={{ marginTop: '5em' }}>
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
                                iconPosition="left"
                                placeholder="Email address"
                            />
                            <Form.Input
                                fluid
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                type="password"
                            />

                            <Button color="blue" fluid size="large">
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