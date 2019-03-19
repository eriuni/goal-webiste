import React from "react";
import { Tab, Table } from "semantic-ui-react";

// const MatchesTable = props => (

// );

const TodayMatches = props => {
  const panes = [
    {
      menuItem: "Today Matches",
      render: () => (
        <Tab.Pane>
          <Table stackable sortable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="right">Home Team</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Result</Table.HeaderCell>
                <Table.HeaderCell textAlign="left">Away Team</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {props.matches.map((item, i) => {
                return item.matches.length ? (
                  <Table.Row key={item.id}>
                    <Table.Cell textAlign="right">
                      {item.homeTeam.name}
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      {item.score.fullTime.homeTeam}-
                      {item.score.fullTime.awayTeam}
                    </Table.Cell>
                    <Table.Cell>{item.awayTeam.name}</Table.Cell>
                  </Table.Row>
                ) : (
                  "No matches today"
                );
              })}
            </Table.Body>
          </Table>
        </Tab.Pane>
      )
    },
    {
      menuItem: "Live",
      render: () => (
        <Tab.Pane>
          <Table stackable sortable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="right">Home Team</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Result</Table.HeaderCell>
                <Table.HeaderCell textAlign="left">Away Team</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {props.matches
                .filter(
                  item => item.status === "IN_PLAY" || item.status === "PAUSED"
                )
                .map((item, i) => {
                  return (
                    <Table.Row key={item.id}>
                      <Table.Cell textAlign="right">
                        {item.homeTeam.name}
                      </Table.Cell>
                      <Table.Cell textAlign="center">
                        {item.score.fullTime.homeTeam}-
                        {item.score.fullTime.awayTeam}
                      </Table.Cell>
                      <Table.Cell>{item.awayTeam.name}</Table.Cell>
                    </Table.Row>
                  );
                })}
            </Table.Body>
          </Table>
        </Tab.Pane>
      )
    },
    {
      menuItem: "Finished",
      render: () => (
        <Tab.Pane>
          <Table stackable sortable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="right">Home Team</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Result</Table.HeaderCell>
                <Table.HeaderCell textAlign="left">Away Team</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {props.matches
                .filter(item => item.status === "FINISHED")
                .map((item, i) => {
                  return (
                    <Table.Row key={item.id}>
                      <Table.Cell textAlign="right">
                        {item.homeTeam.name}
                      </Table.Cell>
                      <Table.Cell textAlign="center">
                        {item.score.fullTime.homeTeam}-
                        {item.score.fullTime.awayTeam}
                      </Table.Cell>
                      <Table.Cell>{item.awayTeam.name}</Table.Cell>
                    </Table.Row>
                  );
                })}
            </Table.Body>
          </Table>
        </Tab.Pane>
      )
    },
    {
      menuItem: "Scheduled",
      render: () => (
        <Tab.Pane>
          <Table stackable sortable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="right">Home Team</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Result</Table.HeaderCell>
                <Table.HeaderCell textAlign="left">Away Team</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {props.matches
                .filter(item => item.status === "SCHEDULED")
                .map((item, i) => {
                  return (
                    <Table.Row key={item.id}>
                      <Table.Cell textAlign="right">
                        {item.homeTeam.name}
                      </Table.Cell>
                      <Table.Cell textAlign="center">
                        {item.score.fullTime.homeTeam}-
                        {item.score.fullTime.awayTeam}
                      </Table.Cell>
                      <Table.Cell>{item.awayTeam.name}</Table.Cell>
                    </Table.Row>
                  );
                })}
            </Table.Body>
          </Table>
        </Tab.Pane>
      )
    }
  ];
  return <Tab menuPosition="right" panes={panes} />;
};

export default TodayMatches;
