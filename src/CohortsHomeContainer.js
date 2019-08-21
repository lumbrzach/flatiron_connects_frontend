import React from "react"
import CohortCard from './CohortCard'
import { Container, Header, Segment } from 'semantic-ui-react'

export default class CohortsHomeContainer extends React.Component {

    render() {
        return (
            <div>
                <Container text style={{ marginTop: '5em', marginBottom: '3em' }}>
                    <Header as='h1'>Flatiron Cohorts</Header>
                        <Segment style={{height: '300px', overflow: 'auto'}}>
                            {this.props.cohorts.map((cohort) => <CohortCard key={cohort.id} users={this.props.users} cohort={cohort}/>)}
                        </Segment>
                </Container>
            </div>
        )
    }

}