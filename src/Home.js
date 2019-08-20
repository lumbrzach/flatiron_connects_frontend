import React from "react";
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment,
  } from 'semantic-ui-react'
  import FlatironCarousel from './FlatironCarousel'
import CohortsHomeContainer from "./CohortsHomeContainer";
import UsersContainer from './UsersContainer'


export default class Home extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Container text style={{ marginTop: '5em' }}>
                    <Grid columns={2}>
                        <Grid.Row centered>
                            <Header as='h1'>Welcome to Flatiron Connects</Header>
                            <p>
                                A place for the Flatiron Community to connect and stay connected throughout their journey through the Flatiron Program and beyond.
                            </p>
                        </Grid.Row>
                        <Grid.Row>
                            <FlatironCarousel />
                        </Grid.Row>
                        <Grid.Row centered >
                            <CohortsHomeContainer users={this.props.users} cohorts={this.props.cohorts}/>
                        </Grid.Row>
                    </Grid>
                 </Container>
            </div>
        )
    }

}