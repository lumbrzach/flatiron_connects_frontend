import React from "react"
import { Card, Image, CardContent } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './App.css';

export default class CohortCard extends React.Component {

    render() {
        return (
            <div>
                <Card fluid style={{margin: '2em', width: '40em'}}className="CohortCard" raised={true} >
                    <CardContent>
                        <Image floated='left' avatar src='https://pbs.twimg.com/profile_images/1149340751265980417/s0j8V4p3.png' wrapped ui={false} />
                        <Card.Header as={Link} to={`/cohort/${this.props.cohort.id}`}>{this.props.cohort.official_name}</Card.Header>
                    </CardContent>
                </Card>
            </div>
        )
    }

}

