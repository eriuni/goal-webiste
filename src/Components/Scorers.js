import React from "react";
import { Table, Container } from "semantic-ui-react";

const Scorers = props => (
  <Container>
    <Table striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign="right">Name</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Squad</Table.HeaderCell>
          <Table.HeaderCell textAlign="left">Goals</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.scorers.map((item, i) => {
          return (
            <Table.Row>
              <Table.Cell textAlign="right" width={5}>
                {item.player.name}
              </Table.Cell>
              <Table.Cell textAlign="center" width={2}>
                {item.team.name}
              </Table.Cell>
              <Table.Cell width={5}>{item.numberOfGoals}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  </Container>
);

export default Scorers;
