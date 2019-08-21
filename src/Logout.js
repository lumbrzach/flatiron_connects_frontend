import React from "react";
import {Button, Container} from 'semantic-ui-react';

export default class Logout extends React.Component {

    handleLogout = () => {
        window.localStorage.clear()
        window.location.href = '/'
    }

    render(){
        return(
            <div>
                <Container text style={{ marginTop: '18em', marginBottom: '18em' }}>
                    <Button onClick={this.handleLogout}>Logout {localStorage.name}</Button>
                </Container>
            </div>
        )
    }
}