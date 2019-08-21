import React, { Component } from 'react'
import { Form, Container, Header, Label } from 'semantic-ui-react'


export default class UserForm extends Component {
  state = {
      name: '',
      email: '',
      password: '',
      location: '',
      avatar: '',
      bio: '',
      current_employer: '',
      github: '',
      linkedIn: '',
      facebook: '',
      twitter: '',
      project_1: '',
      project_2: ''

  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleUserSubmit = () => {
    let user = this.state
      
      console.log(user)
      fetch('http://localhost:3000/api/v1/users', {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify({
              user: user
          })
        })
        .then(resp => resp.json())
        .then(console.log)
  }

  render() {

    return (
        <Container text style={{ marginTop: '5em' }}>
            <Header>Create/Edit User Profile</Header>
            <Form onSubmit={this.handleUserSubmit}>
                <Label color={'blue'}>Basic Information</Label>
                <Form.Group widths='equal'>
                    <Form.Field required>
                    <label>Full Name</label>
                    <Form.Input fluid name='name' placeholder='e.g. John Doe' onChange={this.handleChange}/>
                    </Form.Field>
                    <Form.Field required>
                    <label>Email</label>
                    <Form.Input fluid name='email' placeholder='johndoe@email.com' onChange={this.handleChange}/>
                    </Form.Field>
                    <Form.Field required>
                    <label>Password</label>
                    <Form.Input fluid type='password' name='password' placeholder='' onChange={this.handleChange}/>
                    </Form.Field>
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Input fluid name='location' label='Current Location' placeholder='e.g. Atlanta, GA' onChange={this.handleChange}/>
                    <Form.Input fluid name='avatar' label='Avatar Image' placeholder='Image URL' onChange={this.handleChange}/>
                </Form.Group>

                <Form.Input fluid name='current_employer' label='Current Employer' onChange={this.handleChange}/>

                <Form.TextArea label='About' name='bio' placeholder='Tell us more about you...' onChange={this.handleChange}/>
                
                <Label color={'blue'}>Social Media Information</Label>
                <Form.Group widths='equal' label='Social Media Information'>
                    <Form.Input fluid name='github' label='GitHub' placeholder='' onChange={this.handleChange}/>
                    <Form.Input fluid name='linkedIn' label='linkedIn' placeholder='' onChange={this.handleChange}/>
                    <Form.Input fluid name='twitter' label='Twitter' placeholder='' onChange={this.handleChange}/>
                    <Form.Input fluid name='facebook' label='Facebook' placeholder='' onChange={this.handleChange}/>
                </Form.Group>

                <Label color={'blue'}>Featured Projects</Label>
                <Form.Group widths='equal' label='Social Media Information'>
                    <Form.Input fluid name='project_1' label='Project 1' placeholder='Project Repo URL' onChange={this.handleChange}/>
                    <Form.Input fluid name='project_2' label='Project 2' placeholder='Project Repo URL' onChange={this.handleChange}/>
                </Form.Group>

                <Form.Checkbox label='I agree to the Terms and Conditions' />
                <Form.Button>Submit</Form.Button>
            </Form>
        </Container>
    )
  }
}