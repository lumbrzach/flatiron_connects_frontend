import React from "react"
import UserCard from './UserCard'
import { Container, Header, Card, Button, List } from 'semantic-ui-react'

export default class CohortShow extends React.Component {


    render() {
        if (this.props.cohort === undefined) { return null; }
        return (
            <div>
                <Container style={{ marginTop: '5em' }}>
                    <Header centered as='h1'>{this.props.cohort.official_name }</Header>
                    <List size={'large'}>
                        <List.Item>
                        <List.Header>Slogan</List.Header>
                        {this.props.cohort.slogan}
                        </List.Item>
                        <List.Item>
                        <List.Header>Location</List.Header>
                        {this.props.cohort.location}
                        </List.Item>
                        <List.Item>
                        <List.Header>StartDate</List.Header>
                        {this.props.cohort.start_date}
                        </List.Item>
                    </List>
                    
                    {/* <Header textAlign="left" as='h3'><Label color={'blue'}>Slogan</Label> {this.props.cohort.slogan}</Header>
                    <Header textAlign="left" as='h3'><Label color={'blue'}>Location</Label> {this.props.cohort.location}</Header>
                    <Header textAlign="left" as='h3'><Label color={'blue'}>Start Date</Label> {this.props.cohort.start_date}</Header> */}
                    <Button onClick={() => this.props.handleJoinCohort(this.props.cohort.id)}>Join Cohort</Button>
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