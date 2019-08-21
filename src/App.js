import React, {Component} from 'react';
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


const BaseURL = 'http://localhost:3000/api/v1/'



class App extends Component {
  
  constructor() {
    super()
    this.state = {
      cohorts: [],
      users: [],
      cohortFilter: '',
      cohortIsLoading: false,
      userFilter: ''
    }
  }


  componentDidMount() {
    fetch(BaseURL + 'cohorts')
    .then(resp => resp.json())
    .then(cohortList => this.setState({cohorts: cohortList}))

    fetch(BaseURL + 'users')
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

  addCohort = (newCohort) => {
    this.setState({cohorts: [...this.state.cohorts], newCohort})
  }

  checkLogin = () => {
    if(localStorage.jwt !== "null" || null || undefined || '') {
      return true
    }
    else {
      return false
    }
  }

  filterCohorts = (e, {value}) => {
    console.log("inside filterCohorts", value)
    this.setState({
      cohortFilter: value
    })
  }
  //   this.setState({
  //     cohortFilter: value,
  //     cohortIsLoading: true
  //   })
  // }

  getFilteredCohorts = () => {
    return this.state.cohorts.filter((cohort) => cohort.location.toLowerCase().includes(this.state.cohortFilter.toLowerCase()))
  }



  filterUsers = (e, {value}) => {
    this.setState({
      userFilter: value
    })
  }

  getFilteredUsers = () => {
    return this.state.users.filter((user) => user.name.toLowerCase().includes(this.state.userFilter.toLowerCase()))
  }

  handleJoinCohort = (cohortId) => {
    console.log("inside JoinCohort", cohortId)
    fetch('http://localhost:3000/api/v1/user_cohorts', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        authorization: `Bearer ${localStorage.jwt}`
      },
      body: JSON.stringify({
        user_cohort: {
          cohort_id: cohortId
        }
      })
    })
    .then(res => res.json())
    .then(console.log)
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/logout' render={() => (<Logout/>)}/>
          <Route path='/login' render={() => (<Login/>)}/>
          <Route path='/userform' render={(props) => (<UserForm {...props} addUser={this.addUser} />)}/>
          <Route path='/cohortform' render={(props) => (<CohortForm{...props} addCohort={this.addCohort}/>)}/>
          <Route path='/cohorts' 
            render={(props) => (
              <CohortsContainer 
                {...props} 
                  cohortIsLoading={this.state.cohortIsLoading} 
                    filterCohorts={this.filterCohorts} 
                      users={this.state.users} 
                        cohorts={this.getFilteredCohorts()}/>
          )}/>
          <Route path='/users' render={(props) => (<UsersContainer {...props} filterUsers={this.filterUsers} users={this.getFilteredUsers()} cohorts={this.state.cohorts}/>)}/>
          <Route path={'/user/:id'} render={({ match }) => {
           return <UserShow  user={this.showUser(match.params.id)}/>
          }} />
          <Route path='/cohort/:id' render={({ match }) => {
           return <CohortShow  handleJoinCohort={this.handleJoinCohort} users={this.state.users} cohort={this.showCohort(match.params.id)} />
          }} />
          <Route path='/' render={(props) => (<Home {...props} users={this.state.users} cohorts={this.state.cohorts}/>)}/>
        </Switch>
        <Footer />
      </div>
    )
  }
  
}

export default App;
