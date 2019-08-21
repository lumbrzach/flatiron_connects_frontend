import React from "react"
import { Container, Header, Image, Grid, List } from 'semantic-ui-react'

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
                    <Header centered={true} as='h1'>{this.state.user.name}</Header>
                    <Grid divided inverted stackable>
                        <Grid.Column width={8}>
                            <Image size="medium" src={this.state.user.avatar}/>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Container text textAlign="left">
                                <List>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                Bio: 
                                            </List.Header>
                                            <List.Description>
                                                <p>{this.state.user.bio}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        
                                    </List.Item>
                                    <List.Item>
                                        
                                    </List.Item>
                                </List>
                            </Container>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        )
    }

}