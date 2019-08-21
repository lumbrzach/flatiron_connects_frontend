import React from "react"
import UserCard from './UserCard'
import CohortCard from './CohortCard'
import { Container, Header, Segment, Card } from 'semantic-ui-react'

export default class CohortsContainer extends React.Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.cohorts)
        return (
            <div>
                <Container style={{ marginTop: '5em' }}>
                    <Header as='h1'>Flatiron Cohorts</Header>
                        <Card.Group centered={true} itemsPerRow={3} style={{ marginTop: '5em' }}>
                            {this.props.cohorts.map((cohort) => <CohortCard users={this.props.users} cohort={cohort}/>)}
                        </Card.Group>
                </Container>
            </div>
        )
    }

}