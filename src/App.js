import React, {Component, createRef} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar'
import Home from './Home'
import CohortsContainer from "./CohortsContainer"
import Login from './Login'
import UsersContainer from './UsersContainer'
import CohortShow from './CohortShow'
import Footer from "./Footer"
import UserShow from './UserShow'
import CohortForm from './CohortForm'
import UserForm from './UserForm'
import Logout from './Logout'
import {Sticky} from 'semantic-ui-react';

const BaseURL = 'http://localhost:3000/api/v1/'



class App extends Component {
  
  constructor() {
    super()
    this.state = {
      cohorts: [],
      users: []
    }
  }

  contextRef = createRef()

  componentDidMount() {
    fetch(BaseURL + 'cohorts/')
    .then(resp => resp.json())
    .then(cohortList => this.setState({cohorts: cohortList}))

    fetch(BaseURL + 'users/')
    .then(resp => resp.json())
    .then(userList => this.setState({users: userList}))
  }

  showCohort = (id) => {
    let c = this.state.cohorts.find(cohort => (cohort.id === Number(id)))
    return c
    }
  
 showUser = (id) => {
    let u = this.state.users.find(user => (user.id === Number(id)))
    return u
    }
  
  addUser = (newUser) => {
    this.setState({users: [...this.state.users], newUser})
  }

  checkLogin = () => {
    if(localStorage.jwt !== "null" || null || undefined || '') {
      return true
    }
    else {
      return false
    }
  }

  render() {
    return (
      <div className="App" ref={this.contextRef}>
        <NavBar />
        <Switch>
          <Route path='/logout' render={() => (<Logout/>)}/>
          <Route path='/login' render={() => (<Login/>)}/>
          <Route path='/userform' render={(props) => (<UserForm {...props} addUser={this.addUser} />)}/>
          <Route path='/cohortform' render={() => (<CohortForm/>)}/>
          <Route path='/cohorts' render={(props) => (<CohortsContainer {...props} users={this.state.users} cohorts={this.state.cohorts}/>)}/>
          <Route path='/users' render={(props) => (<UsersContainer {...props} users={this.state.users} cohorts={this.state.cohorts}/>)}/>
          <Route path={'/user/:id'} render={({ match }) => {
           return <UserShow  user={this.showUser(match.params.id)}/>
          }} />
          <Route path='/cohort/:id' render={({ match }) => {
            let cohort = this.showCohort(match.params.id)
            return <CohortShow  users={this.state.users} cohort={cohort} />
          }} />
          <Route path='/' render={(props) => (<Home {...props} users={this.state.users} cohorts={this.state.cohorts}/>)}/>
        </Switch>
        <Sticky context={this.contextRef}>
        <Footer />
        </Sticky>
      </div>
    )
  }
  
}

export default App;
