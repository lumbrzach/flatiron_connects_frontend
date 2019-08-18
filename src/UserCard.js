import React from "react"
import { Card, Icon, Image } from 'semantic-ui-react'

export default class UserCard extends React.Component {
    
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Card>
                    <Image src='' placeholder='https://pbs.twimg.com/profile_images/1149340751265980417/s0j8V4p3.png' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>User's Name</Card.Header>
                        <Card.Meta>
                            <span className='date'>Cohort(s): </span>
                        </Card.Meta>
                        <Card.Description>
                            User's Bio
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        22 Friends
                    </a>
                    </Card.Content>
                </Card>
            </div>
        )
    }

}