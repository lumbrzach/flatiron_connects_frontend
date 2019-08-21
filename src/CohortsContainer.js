import React from "react"
import CohortCard from './CohortCard'
import { Container, Header, Card, Search } from 'semantic-ui-react'

export default class CohortsContainer extends React.Component {
    
    render() {
        return (
            <div>
                <Container style={{ marginTop: '6em', marginBottom: '20em' }}>
                    <Header as='h1'>Flatiron Cohorts</Header>
                    <Search fluid showNoResults={false} loading={this.props.cohortIsLoading} input={{ icon: 'search', iconPosition: 'left' }} onSearchChange={this.props.filterCohorts}/>
                        <Card.Group centered={true} itemsPerRow={3} >
                            {this.props.cohorts.map((cohort) => <CohortCard key={cohort.id} users={this.props.users} cohort={cohort}/>)}
                        </Card.Group>
                </Container>
            </div>
        )
    }

}