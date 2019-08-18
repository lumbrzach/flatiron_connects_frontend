import React from "react"
import UserCard from './UserCard'
import CohortCard from './CohortCard'
import { Container, Header, Segment } from 'semantic-ui-react'

export default class CohortsContainer extends React.Component {
    
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Container text style={{ marginTop: '5em' }}>
                    <Header as='h1'>Flatiron Cohorts</Header>
                        <Segment style={{height: '300px', overflow: 'auto'}}>
                            <CohortCard />
                            <CohortCard />
                            <CohortCard />
                            <CohortCard />
                            <CohortCard />
                            <CohortCard />
                            <CohortCard />
                            <CohortCard />
                        </Segment>
                </Container>
            </div>
        )
    }

}