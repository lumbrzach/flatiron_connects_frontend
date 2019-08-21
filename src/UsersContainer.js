import React from "react"
import UserCard from './UserCard'
import { Container, Card, Header, Search } from 'semantic-ui-react'


export default class UsersContainer extends React.Component {
    

    render() {
        return (
            <div>
                <Container style={{ marginTop: '6em', marginBottom: '40em' }}>
                    <Header as='h1'>People of Flatiron</Header>
                    <Search fluid placeholder={"Search by name"} size={"huge"} showNoResults={false} loading={false} input={{ icon: 'search', iconPosition: 'left' }} onSearchChange={this.props.filterUsers}/>   
                        <Card.Group centered={true} itemsPerRow={3}>
                            {this.props.users.map((user) => <UserCard key={user.id} user={user} cohort={this.props.cohorts}/>)}
                        </Card.Group>
                </Container>
            </div>
        )
    }

}