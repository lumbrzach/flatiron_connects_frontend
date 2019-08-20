import React, { Component } from 'react'
import { Form, Container, Header } from 'semantic-ui-react'
import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
  } from 'semantic-ui-calendar-react';

const options = [
  { key: 'sei', text: 'Software Engineering Immersive', value: 'sei' },
  { key: 'seo', text: 'Software Engineerign Online', value: 'seo' },
  { key: 'dsi', text: 'Data Science Immersive', value: 'dsi' },
  { key: 'dso', text: 'Data Science Online', value: 'dso' },
  { key: 'uxi', text: 'UX/UI Design Immersive', value: 'uxi' },
  { key: 'uxo', text: 'UX/UI Design Online', value: 'uxo' },
  { key: 'o', text: 'Other', value: 'other' }
]

export default class CohortForm extends Component {
    state = {
        startdate: '',
        datesRange: '',
        officialName: '',
        slogan: '',
        course: ''

      };
   
    handleChange = (event, {name, value}) => {
      if (this.state.hasOwnProperty(name)) {
        this.setState({ [name]: value });
      }
    }
//   handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
        <Container text style={{ marginTop: '5em' }}>
            <Header>Create/Edit Cohort</Header>
            <Form>
                <Form.Group widths='equal'>
                <Form.Input fluid label='Official Name' placeholder='e.g. atlanta-web-060319' />
                <Form.Input fluid label='Nickname' placeholder='e.g. Git Rich or Die Pyrin' />
                <Form.Select fluid label='Course' options={options} placeholder='Course' />
                </Form.Group>
                <DateInput
                name="startdate"
                placeholder="Start Date"
                value={this.state.startdate}
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
                <Form.Input fluid label='Cohort Logo' placeholder='Image URL' />
                <Form.Input fluid label='Location' placeholder='e.g. Atlanta, GA or London, Uk' />
                <Form.Button>Submit</Form.Button>
            </Form>
        </Container>
    )
  }
}