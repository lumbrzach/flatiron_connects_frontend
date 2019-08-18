import React from "react"
import UserCard from './UserCard'
import { Container } from 'semantic-ui-react'


export default class CohortsContainer extends React.Component {
    
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Container text style={{ marginTop: '5em' }}>
                    <UserCard />
                 </Container>
            </div>
        )
    }

}