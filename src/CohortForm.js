import React, { Component } from 'react'
import { Form, Container, Header } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react';

const options = [
  { key: 'sei', text: 'Software Engineering Immersive', value: 'Software Engineering Immersive' },
  { key: 'seo', text: 'Software Engineering Online', value: 'Software Engineerign Online' },
  { key: 'dsi', text: 'Data Science Immersive', value: 'Data Science Immersive' },
  { key: 'dso', text: 'Data Science Online', value: 'Data Science Online' },
  { key: 'uxi', text: 'UX/UI Design Immersive', value: 'UX/UI Design Immersive' },
  { key: 'uxo', text: 'UX/UI Design Online', value: 'UX/UI Design Online' },
  { key: 'o', text: 'Other', value: 'other' }
]

export default class CohortForm extends Component {
    state = {
        start_date: '',
        official_name: '',
        slogan: '',
        course: '',
        image: '',
        location: ''
      };

   
    handleChange = (event, {name, value}) => {
      // console.logging to make sure i'm getting the correct values#########
      // console.log("event", event, "name", name, "value", value)
      if (this.state.hasOwnProperty(name)) {
        this.setState({ [name]: value });
        // else console.log the name and value because I think they might be different at this juncture
      // } else {
      //   console.log(name, value)
      // }
      // console.logs did not show any key-mismatches, need to figure out why all of the cohort attributes are saving as null
      }
    }


    handleSubmit = e => {
      // adding in e.persist because of synthetic events probably causing values to be wiped and sent back to pool
      e.persist()

      const jwt = localStorage.jwt

      fetch("http://localhost:3000/api/v1/cohorts",{
        method: "POST",
        headers: {
          // taking out extra headers. thinking they might be conflicting with the backend auth. had no effect. moving on to console.log logging this.state directly on submit callback
          "Content-Type":"application/json",
          "Accept":"application/json",
          "Authorization": `Bearer ${jwt}`
        },
        body: JSON.stringify({
            cohort: this.state
        })
      })
      .then(res => res.json())
      .then(data => {
        this.props.addCohort(data)
        this.props.history.push('/')
      })
    }
    




//   handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
        <Container style={{ marginTop: '8em', marginBottom: '8em' }}>
            <Header>Create/Edit Cohort</Header>
            {/* directly console.logging this.state onSubmit to see what the state is when i click submit.
             the state is fine. it is apparenly being updated and captured by handleChange and handleSubmit. added e.persist() to handleSubmit. going to check and see if that works... that did not work. its something wrong with the params i am sending. the posts are working correctly with postman.*/}
            <Form onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                <Form.Input fluid label='Official Name' placeholder='e.g. atlanta-web-060319' name="official_name" value={this.state.official_name} onChange={this.handleChange}/>
                <Form.Input fluid label='Nickname' placeholder='e.g. Git Rich or Die Pyrin' name="slogan" value={this.state.slogan} onChange={this.handleChange}/>
                <Form.Select fluid label='Course' options={options} placeholder='Course' select={this.state.course} name="course" onChange={this.handleChange}/>
                </Form.Group>
                <DateInput
                name="start_date"
                placeholder="Start Date"
                value={this.state.start_date}
                iconPosition="left"
                onChange={this.handleChange}
                />
                {/* <DatesRangeInput
                name="datesRange"
                placeholder="From - To"
                value={this.state.datesRange}
                iconPosition="left"
                onChange={this.handleChange}
                /> */}
                <Form.Input fluid label='Cohort Logo' placeholder='Image URL' name="image" value={this.state.image} onChange={this.handleChange}/>
                <Form.Input fluid label='Location' placeholder='e.g. Atlanta, GA or London, Uk' name="location" value={this.state.location} onChange={this.handleChange}/>
                <Form.Button>Submit</Form.Button>
            </Form>
        </Container>
    )
  }
}
