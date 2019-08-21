import React from "react"
import { Container, Header, Image, Grid, List } from 'semantic-ui-react'

export default class UserShow extends React.Component {
    

    render() {
        console.log("User Show Page", this.props.user)
        if (this.props.user === undefined) { return null; }
        return (
            <div>
                <Container text style={{ marginTop: '10em', marginBottom: '10em' }}>
                    <Header centered={true} as='h1'>{this.props.user.name}</Header>
                    <Grid divided inverted stackable>
                        <Grid.Column width={8}>
                            <Image size="medium" src={this.props.user.avatar}/>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Container text textAlign="left">
                                <List>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                Current Location: 
                                            </List.Header>
                                            <List.Description>
                                                <p>{this.props.user.location}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                Current Employer: 
                                            </List.Header>
                                            <List.Description>
                                                <p>{this.props.user.current_employer}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                Bio: 
                                            </List.Header>
                                            <List.Description>
                                                <p>{this.props.user.bio}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                LinkedIn: 
                                            </List.Header>
                                            <List.Description as="a" href={this.props.user.linkedIn}>
                                                <p>{this.props.user.linkedIn}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                Facebook: 
                                            </List.Header>
                                            <List.Description as="a" href={this.props.user.facebook}>
                                                <p>{this.props.user.facebook}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                Twitter: 
                                            </List.Header>
                                            <List.Description as="a" href={this.props.user.twitter}>
                                                <p>{this.props.user.twitter}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                Feature Project(s): 
                                            </List.Header>
                                            <List.Description as="a" href={this.props.user.project_1}>
                                                <p>{this.props.user.project_1}</p>
                                            </List.Description>
                                            <List.Description as="a" href={this.props.user.project_1}>
                                                <p>{this.props.user.project_2}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    {/* <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                Cohort(s): 
                                            </List.Header>
                                            <List.Description>
                                                {this.props.user.cohorts.map((cohort) => <p>cohort</p>)}
                                            </List.Description>
                                        </List.Content>
                                    </List.Item> */}
                                </List>
                            </Container>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        )
    }

}