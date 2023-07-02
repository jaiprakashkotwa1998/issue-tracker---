import React from "react";
import {
  Header,
  Button,
  Menu,
  Segment,
  Icon,
  Container,
  Sidebar,
  Tab
} from "semantic-ui-react";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }


handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refershToken');
    this.props.history.push('/');

}

  render() {
    let fixed = true;
    let panes = [
      { menuItem: "All Tasks", render: () => 
      <Tab.Pane>
          <span>View goes here</span>
      </Tab.Pane> },
      { menuItem: "Assign a task", render: () => <Tab.Pane> <span>View goes here</span>      </Tab.Pane> },
    ];

    return (
      <React.Fragment>
        <Segment
          inverted
          textAlign="center"
          style={{ padding: "1em 0em" }}
          vertical
        >
          <Menu
            fixed={fixed ? "top" : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
            <Container>
              <Menu.Item as="a">Issue Tracker</Menu.Item>
              <Menu.Item position="right">
                <Button as="a" primary={fixed} inverted={!fixed} onClick={this.handleLogout}>
                  <Icon name="sign-out"></Icon> Logout
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
        </Segment>
        <Segment>
          <Container fluid style={{marginTop: 30}}>
            <Tab
              menu={{ fluid: true, vertical: true, tabular: true }}
              panes={panes}
            />
          </Container>
        </Segment>
      </React.Fragment>
    );
  }
}

export default Dashboard;
