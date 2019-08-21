import React from "react"
import UserCard from './UserCard'
import { Container, Header, Card, Button } from 'semantic-ui-react'

export default class CohortShow extends React.Component {


    render() {
        console.log("Cohort Show Page", this.props.cohort)
        if (this.props.cohort === null) { return null; }
        return (
            <div>
                <Container style={{ marginTop: '5em' }}>
                    <Header centered={true} as='h1'>{this.props.cohort.official_name }</Header>
                    <Header centered={true} as='h3'>{this.props.cohort.slogan}</Header>
                    <Button onClick={(e) => this.handleJoinCohort(e, this.props.cohort.id)}>Join Cohort</Button>
                    <br/>
                    <br/>
                    <br/>
                    <Card.Group centered={true} itemsPerRow={4}>
                        {this.props.cohort.users.map((user) => <UserCard user={user} />)}
                    </Card.Group>
                </Container>
            </div>
        )
    }

}