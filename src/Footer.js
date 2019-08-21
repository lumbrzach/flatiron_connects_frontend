import React from "react";
import {
    Container,
    Grid,
    Header,
    Image,
    Segment,
    Icon,
    Sticky 
  } from 'semantic-ui-react'

  export default class Footer extends React.Component {

    render() {
          return (
            <Sticky onBottom>  
            <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container textAlign='center'>
                <Grid divided inverted stackable>
                <Grid.Column width={8}>
                    <Header inverted as='h4'>Visit The Flatiron School</Header>
                    <Image as='a' href="https://flatironschool.com/" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MnB4IiB2aWV3Qm94PSIwIDAgMjM0IDExNCI+CiAgPGcgZmlsbD0iIzA2QUZFMyI+CiAgICA8cGF0aCBkPSJNMTguNCwwaDguMUw4LjEsNjEuNEgwTDE4LjQsMHoiIC8+CiAgICA8cGF0aCBkPSJNMzUsMGg4LjFMMjQuNyw2MS40aC04LjFMMzUsMHoiIC8+CiAgPC9nPgogIDxnIGZpbGw9IiNmZmZmZmYiPgogICAgPHBhdGggZD0iTTUxLjcsNjEuNVYxOS43aDIwLjF2Ni4ySDU4Ljl2MTAuOGg5LjZWNDNoLTkuNnYxOC42aC03LjJWNjEuNXoiIC8+CiAgICA8cGF0aCBkPSJNNzUuNiw2MS41VjE5LjdoNy4ydjM1LjZoMTEuM3Y2LjNMNzUuNiw2MS41TDc1LjYsNjEuNXoiIC8+CiAgICA8cGF0aCBkPSJNMTA1LjEsNjEuNWgtN2w3LjctNDEuOWg4LjlsNy43LDQxLjloLTdsLTEuMy05LjNoLTcuOUwxMDUuMSw2MS41eiBNMTA3LjQsNDZoNS44bC0yLjgtMThoLTAuMUwxMDcuNCw0NnoiIC8+CiAgICA8cGF0aCBkPSJNMTI4LDI1LjloLTd2LTYuM2gyMS4xdjYuM2gtN3YzNS42aC03LjJMMTI4LDI1LjlMMTI4LDI1Ljl6IiAvPgogICAgPHBhdGggZD0iTTE0NS4zLDYxLjVWMTkuN2g3LjJ2NDEuOUwxNDUuMyw2MS41TDE0NS4zLDYxLjV6IiAvPgogICAgPHBhdGggZD0iTTE2NC43LDYxLjVoLTcuMlYxOS43aDEwLjFjOC4xLDAsMTIuMiwzLjQsMTIuMiwxMi40YzAsNi43LTIuNiw5LjUtNSwxMC42bDYuMSwxOWgtNy4zbC01LjEtMTcuMyBjLTAuOSwwLjEtMi40LDAuMi0zLjcsMC4yTDE2NC43LDYxLjVMMTY0LjcsNjEuNXogTTE2NC43LDM4LjRoMi42YzMuOSwwLDUuMy0xLjQsNS4zLTYuNHMtMS41LTYuNC01LjMtNi40aC0yLjZWMzguNHoiIC8+CiAgICA8cGF0aCBkPSJNMTg0LjMsMjkuOGMwLTUuOSwzLjUtMTAuNywxMS0xMC43czExLDQuOCwxMSwxMC43djIxLjZjMCw1LjktMy41LDEwLjctMTEsMTAuN3MtMTEtNC44LTExLTEwLjdWMjkuOHogTTE5MS40LDUxLjJjMCwzLjEsMC45LDQuNiwzLjgsNC42YzIuOSwwLDMuOC0xLjUsMy44LTQuNlYzMGMwLTMuMS0wLjktNC42LTMuOC00LjZzLTMuOCwxLjUtMy44LDQuNlY1MS4yeiIgLz4KICAgIDxwYXRoIGQ9Ik0yMTEuMSw2MS41VjE5LjdoNi43bDguOCwyNGgwLjF2LTI0aDYuNXY0MS45aC02LjNsLTkuMi0yNi4yaC0wLjF2MjYuMkwyMTEuMSw2MS41TDIxMS4xLDYxLjV6IiAvPgogICAgPHBhdGggZD0iTTY0LjgsODEuMWMtMC4zLTMuNi0yLjItNC42LTMuOC00LjZjLTIuMywwLTMuNiwxLjUtMy42LDQuMWMwLDcuMSwxNC42LDEwLjYsMTQuNiwyMS45IGMwLDYuOS00LjYsMTAuNy0xMS40LDEwLjdjLTYuNywwLTEwLjUtNS4zLTEwLjgtMTEuNmw2LjgtMWMwLjMsNC4yLDIsNi4zLDQuMyw2LjNjMi41LDAsNC4yLTEuMyw0LjItMy44IGMwLTguMy0xNC42LTEwLjUtMTQuNi0yMi41YzAtNi43LDQuMS0xMC40LDExLjEtMTAuNGM1LjksMCw5LjMsNC4yLDEwLDEwLjJMNjQuOCw4MS4xeiIgLz4KICAgIDxwYXRoIGQ9Ik05MC41LDg0Ljd2LTMuMmMwLTMuNS0xLjYtNS0zLjUtNWMtMi45LDAtMy44LDEuNS0zLjgsNC42djIxLjJjMCwzLjEsMC45LDQuNiwzLjgsNC42IGMyLjYsMCwzLjUtMS41LDMuNS00LjJ2LTVoNy4ydjQuOGMwLDUuOS0zLjUsMTAuNy0xMC43LDEwLjdjLTcuNSwwLTExLTQuOC0xMS0xMC43VjgwLjljMC01LjksMy41LTEwLjcsMTEtMTAuNyBjNy4yLDAsMTAuNyw1LjIsMTAuNywxMS41djMuMUw5MC41LDg0LjdMOTAuNSw4NC43eiIgLz4KICAgIDxwYXRoIGQ9Ik0xMDIsMTEyLjZWNzAuN2g3LjJ2MTcuMWg3LjdWNzAuN2g3LjJ2NDEuOWgtNy4yVjk0aC03Ljd2MTguNkgxMDJ6IiAvPgogICAgPHBhdGggZD0iTTEyOC44LDgwLjljMC01LjksMy41LTEwLjcsMTEtMTAuN3MxMSw0LjgsMTEsMTAuN3YyMS42YzAsNS45LTMuNSwxMC43LTExLDEwLjdzLTExLTQuOC0xMS0xMC43VjgwLjl6IE0xMzYsMTAyLjNjMCwzLjEsMC45LDQuNiwzLjgsNC42czMuOC0xLjUsMy44LTQuNlY4MS4xYzAtMy4xLTAuOS00LjYtMy44LTQuNmMtMi45LDAtMy44LDEuNS0zLjgsNC42VjEwMi4zeiIgLz4KICAgIDxwYXRoIGQ9Ik0xNTUuNiw4MC45YzAtNS45LDMuNS0xMC43LDExLTEwLjdzMTEsNC44LDExLDEwLjd2MjEuNmMwLDUuOS0zLjUsMTAuNy0xMSwxMC43cy0xMS00LjgtMTEtMTAuN1Y4MC45eiBNMTYyLjgsMTAyLjNjMCwzLjEsMC45LDQuNiwzLjgsNC42YzIuOSwwLDMuOC0xLjUsMy44LTQuNlY4MS4xYzAtMy4xLTAuOS00LjYtMy44LTQuNnMtMy44LDEuNS0zLjgsNC42VjEwMi4zeiIgLz4KICAgIDxwYXRoIGQ9Ik0xODIsMTEyLjZWNzAuN2g3LjJ2MzUuNmgxMS4zdjYuM0gxODJ6IiAvPgogIDwvZz4KPC9zdmc+Cg==" />
                    {/* <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                    </List> */}
                </Grid.Column>
                {/* <Grid.Column width={3}>
                    <Header inverted as='h4' content='Group 2' />
                    <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                    </List>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Header inverted as='h4' content='Group 3' />
                    <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                    </List>
                </Grid.Column> */}
                <Grid.Column width={8}>
                    <Header inverted as='h4'>Built with <Icon fitted name="heart"/> by: </Header>
                    <p>Conrad Casper and Zach Parker</p>
                    <p>Git Rich or Die Pryin'</p>
                </Grid.Column>
                </Grid>
{/*             
                <Divider inverted section />
                <Image centered size='mini' src='/logo.png' />
                <List horizontal inverted divided link size='small'>
                <List.Item as='a' href='#'>
                    Site Map
                </List.Item>
                <List.Item as='a' href='#'>
                    Contact Us
                </List.Item>
                <List.Item as='a' href='#'>
                    Terms and Conditions
                </List.Item>
                <List.Item as='a' href='#'>
                    Privacy Policy
                </List.Item>
                </List> */}
            </Container>
            </Segment>
            </Sticky>
          )
      }
  }