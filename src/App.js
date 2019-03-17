import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Header from "./Components/Header";
import TodayMatches from "./Components/TodayMatches";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { matches: [] };
  }

  componentDidMount() {
    this.UserList();
  }

  async UserList() {
    const api_call = await fetch(`http://api.football-data.org/v2/matches`, {
      headers: { "X-Auth-Token": "dfc3aded84f641048a865569b8480ac4" }
    });
    const data = await api_call.json();
    console.log(data.matches);
    this.setState({ matches: data.matches });
  }
  render() {
    return (
      <Container className="App">
        <Header />
        <TodayMatches matches={this.state.matches} />
      </Container>
    );
  }
}

export default App;
