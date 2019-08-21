import React from "react"
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './App.css';

export default class UserCard extends React.Component {
    
    constructor() {
        super()
    }

    render() {
        console.log("inside UserCard", this.props.user )
        return (
            <div>
                <Card style={{margin: '2em'}}raised={true} className="UserCard">
                    <Card.Content>
                        <Image size='small' src={this.props.user.avatar} placeholder='https://pbs.twimg.com/profile_images/1149340751265980417/s0j8V4p3.png' wrapped ui={true} />
                    </Card.Content>
                    <Card.Content>
                        <Card.Header>{this.props.user.name}</Card.Header>
                        <Card.Meta>
                            <span className='date'>Cohort(s): </span>
                        </Card.Meta>
                        <Card.Description>
                            {this.props.user.bio}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        22 Friends
                    </a>
                    </Card.Content>
                    <Card.Content>
                        <Button as={Link} to={`/user/${this.props.user.id}`}>{this.props.user.name}'s Profile</Button>
                    </Card.Content>
                </Card>
            </div>
        )
    }

}