import React from 'react'
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Login from './Login';

export default class NavBar extends React.Component {


    loginButtonDisplay = () => {
      if(localStorage.jwt === "null") {
        return Login
      } 
      else {
        return 
      }
    }

    render() {
        return (
            <Menu fixed='top' inverted>
              <Container>
                <Link to='/'>
                <Menu.Item as='a' header>
                    <Image size='mini' src='https://pbs.twimg.com/profile_images/1149340751265980417/s0j8V4p3.png' style={{ marginRight: '1.5em' }} /> 
                    Flatiron Connects
                </Menu.Item>
                </Link>
                <Menu.Item as='a'>
                    <Link to='/login'>
                        Login
                    </Link>
                </Menu.Item>
        
                <Dropdown item simple text='Explore'>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to='/cohorts'>Cohorts</Dropdown.Item>
                    <Dropdown.Item as={Link} to='/users'>People</Dropdown.Item>
                    <Dropdown.Item>
                      <i className='dropdown icon' />
                      <span className='text'>CREATE</span>
                      <Dropdown.Menu>
                        <Dropdown.Item as={Link} to='/userform'>New Profile</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/cohortform'>New Cohort</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Item>
                    {/* <Dropdown.Divider />
                    <Dropdown.Header>Header Item</Dropdown.Header>
                    <Dropdown.Item>
                      <i className='dropdown icon' />
                      <span className='text'>Submenu</span>
                      <Dropdown.Menu>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item> */}
                  </Dropdown.Menu>
                </Dropdown>
              </Container>
            </Menu>
        )
    }

}