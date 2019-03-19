import React from "react";
import { Tab, Table } from "semantic-ui-react";

const Standings = props => {
  const panes = [
    {
      menuItem: "Overall",
      render: () => (
        <Tab.Pane>
          <Table singleLine sortable size="small" compact>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="center">Position</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Team</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Points</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Won</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Draw</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Lost</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Goals</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">
                  Match Played
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {props.standings.map((item, i) => {
                return (
                  <Table.Row key={item.position}>
                    <Table.Cell textAlign="center">{item.position}</Table.Cell>
                    <Table.Cell textAlign="center">{item.team.name}</Table.Cell>
                    <Table.Cell textAlign="center">{item.points}</Table.Cell>
                    <Table.Cell textAlign="center">{item.won}</Table.Cell>
                    <Table.Cell textAlign="center">{item.draw}</Table.Cell>
                    <Table.Cell textAlign="center">{item.lost}</Table.Cell>
                    <Table.Cell textAlign="center">
                      {item.goalsFor}-{item.goalsAgainst}
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      {item.playedGames}
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </Tab.Pane>
      )
    },
    {
      menuItem: "Home",
      render: () => (
        <Tab.Pane>
          <Table singleLine sortable size="small" compact>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="center">Position</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Team</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Points</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Won</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Draw</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Lost</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Goals</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">
                  Match Played
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {props.home.map((item, i) => {
                return (
                  <Table.Row key={item.position}>
                    <Table.Cell textAlign="center">{item.position}</Table.Cell>
                    <Table.Cell textAlign="center">{item.team.name}</Table.Cell>
                    <Table.Cell textAlign="center">{item.points}</Table.Cell>
                    <Table.Cell textAlign="center">{item.won}</Table.Cell>
                    <Table.Cell textAlign="center">{item.draw}</Table.Cell>
                    <Table.Cell textAlign="center">{item.lost}</Table.Cell>
                    <Table.Cell textAlign="center">
                      {item.goalsFor}-{item.goalsAgainst}
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      {item.playedGames}
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </Tab.Pane>
      )
    },
    {
      menuItem: "Away",
      render: () => (
        <Tab.Pane>
          <Table singleLine sortable size="small" compact>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="center">Position</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Team</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Points</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Won</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Draw</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Lost</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Goals</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">
                  Match Played
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {props.away.map((item, i) => {
                return (
                  <Table.Row key={item.position}>
                    <Table.Cell textAlign="center">{item.position}</Table.Cell>
                    <Table.Cell textAlign="center">{item.team.name}</Table.Cell>
                    <Table.Cell textAlign="center">{item.points}</Table.Cell>
                    <Table.Cell textAlign="center">{item.won}</Table.Cell>
                    <Table.Cell textAlign="center">{item.draw}</Table.Cell>
                    <Table.Cell textAlign="center">{item.lost}</Table.Cell>
                    <Table.Cell textAlign="center">
                      {item.goalsFor}-{item.goalsAgainst}
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      {item.playedGames}
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </Tab.Pane>
      )
    }
  ];
  return <Tab menuPosition="left" panes={panes} />;
};

export default Standings;
