import React from "react"
import UserCard from './UserCard'
import { Container, Card, Header } from 'semantic-ui-react'


export default class UsersContainer extends React.Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        console.log("inside UsersContainer", this.props.users)
        return (
            <div>
                <Container text style={{ marginTop: '5em' }}>
                    <Header as='h1'>People of Flatiron</Header>
                        <Card.Group centered={true} itemsPerRow={2}>
                            {this.props.users.map((user) => <UserCard user={user} cohort={this.props.cohorts}/>)}
                        </Card.Group>
                </Container>
            </div>
        )
    }

}