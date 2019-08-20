import React from "react"
import UserCard from './UserCard'
import CohortCard from './CohortCard'
import { Container, Header, Card, Image } from 'semantic-ui-react'

export default class UserShow extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            user: this.props.user
        }
    }

    componentDidMount() {
        
    }

    render() {
        console.log("User Show Page", this.props.user)
        
        return (
            <div>
                <Container text style={{ marginTop: '5em' }}>
                    User Show
                    <Header centered={true} as='h1'>{this.state.user.name}</Header>
                    <Image centered={true} src={this.state.user.avatar}/>
                    <p>Bio: {this.state.user.bio}</p>
                </Container>
            </div>
        )
    }

}