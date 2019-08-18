import React from "react"
import UserCard from './UserCard'
import CohortCard from './CohortCard'
import { Container, Header } from 'semantic-ui-react'

export default class CohortShow extends React.Component {
    
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Container text style={{ marginTop: '5em' }}>
                    <Header as='h1'>Cohort Name</Header>
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                </Container>
            </div>
        )
    }

}