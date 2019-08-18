import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar'
import Home from './Home'
import CohortsContainer from "./CohortsContainer"
import Login from './Login'
import UsersContainer from './UsersContainer'
import CohortShow from './CohortShow'
import Footer from "./Footer"


class App extends React.Component {
  
  constructor() {
    super()
  }
  
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/login' render={() => (<Login/>)}/> 
          <Route exact path='/cohorts' render={() => (<CohortsContainer/>)}/>
          <Route exact path='/users' render={() => (<UsersContainer/>)}/> 
          <Route exact path='/cohort/show' render={() => (<CohortShow />)}/>
          <Route exact path='/' component={Home} />
        </Switch>
        <Footer />
      </div>
    )
  }
  
}

export default App;
// for router
// return <CohortShow cohort={this.showHealer(match.params.id)}/>
