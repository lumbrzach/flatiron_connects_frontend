import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';

export default class Login extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div>
                    <h3>
                        Welcome. Please Login Below.
                    </h3>
                <br/>
                </div>
                <div>
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
                            Not registered yet? <a href="#">Sign Up</a>
                        </Message>
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        )
    }

}