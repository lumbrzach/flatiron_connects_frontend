import React from "react"
import { Card, Icon, Image, CardContent } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class CohortCard extends React.Component {
    
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Card fluid >
                    <CardContent>
                        <Image floated='left' avatar src='https://pbs.twimg.com/profile_images/1149340751265980417/s0j8V4p3.png' wrapped ui={false} />
                        <Card.Header as={Link} to={'/cohort/show'}>Cohort Name</Card.Header>
                    </CardContent>
                </Card>
            </div>
        )
    }

}

{/* <Card.Header as={Link} to={`cohort/${this.props.cohort.id}`}>Cohort Name</Card.Header> */}