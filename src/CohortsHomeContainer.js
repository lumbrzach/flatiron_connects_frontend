import React from "react"
import UserCard from './UserCard'
import CohortCard from './CohortCard'
import { Container, Header, Segment } from 'semantic-ui-react'

export default class CohortsHomeContainer extends React.Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.cohorts)
        return (
            <div>
                <Container text style={{ marginTop: '5em' }}>
                    <Header as='h1'>Flatiron Cohorts</Header>
                        <Segment style={{height: '300px', overflow: 'auto'}}>
                            {this.props.cohorts.map((cohort) => <CohortCard users={this.props.users} cohort={cohort}/>)}
                        </Segment>
                </Container>
            </div>
        )
    }

}