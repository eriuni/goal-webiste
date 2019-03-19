import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Header from "./Components/Header";
import TodayMatches from "./Components/TodayMatches";
import Standings from "./Components/Standings";
import Scorers from "./Components/Scorers";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matches: [],
      standings: [],
      homeStandings: [],
      awayStandings: [],
      scorers: []
    };
  }

  componentDidMount() {
    this.UserList();
  }

  async UserList() {
    const api_call = await fetch(
      `http://api.football-data.org/v2/matches?competitions=2019`,
      {
        headers: { "X-Auth-Token": "dfc3aded84f641048a865569b8480ac4" }
      }
    );
    const data = await api_call.json();
    console.log(data.matches);

    const api_call_standigs = await fetch(
      `http://api.football-data.org/v2/competitions/2019/standings`,
      {
        headers: { "X-Auth-Token": "dfc3aded84f641048a865569b8480ac4" }
      }
    );
    const dataStandings = await api_call_standigs.json();

    console.log(dataStandings.standings);

    const stand = dataStandings.standings
      .map(item => (item = item.table))
      .map((item, i) => item);

    console.log(stand[0], 1);

    const api_call_scorers = await fetch(
      `http://api.football-data.org/v2/competitions/2019/scorers`,
      {
        headers: { "X-Auth-Token": "dfc3aded84f641048a865569b8480ac4" }
      }
    );
    const topScorers = await api_call_scorers.json();

    console.log(topScorers.scorers);

    // const stand = dataStandings.standings
    //   .map(item => (item = item.table))
    //   .map((item, i) => item);

    this.setState({
      matches: data.matches,
      standings: stand[0],
      homeStandings: stand[1],
      awayStandings: stand[2],
      scorers: topScorers.scorers
    });
  }
  render() {
    const {
      matches,
      standings,
      homeStandings,
      awayStandings,
      scorers
    } = this.state;
    // const stand = standings

    //   .map(item => (item = item.table))
    //   .map((item, i) => item);
    // console.log(stand, 1);

    return (
      <Container className="App">
        <Header />
        <Scorers scorers={scorers} />
        <Standings
          standings={standings}
          home={homeStandings}
          away={awayStandings}
        />
        <TodayMatches matches={matches} />
      </Container>
    );
  }
}

export default App;
