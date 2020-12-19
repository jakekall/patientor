import React from 'react';
import { Icon, Header, List, Segment, Container } from 'semantic-ui-react';
import DiagnosisList from './DiagnosisList';
import { HospitalEntry } from '../types';

const HospitalDetails: React.FC<{ entry: HospitalEntry }> = ({ entry }) => {
  return (
    <Segment>
      <Header as="h3">
        {entry.date} <Icon name="hospital" />
      </Header>
      <List>
        <List.Item>{entry.specialist}</List.Item>
        <List.Item style={{ fontStyle: 'italic' }}>
          {entry.description}
        </List.Item>
      </List>
      {entry.diagnosisCodes && (
        <DiagnosisList diagnosisCodes={entry.diagnosisCodes} />
      )}
      {entry.discharge && (
        <Container style={{ marginTop: '1rem' }}>
          <Header sub>Discharge</Header>
          <List>
            <List.Item>{entry.discharge.date}</List.Item>
            <List.Item>{entry.discharge.criteria}</List.Item>
          </List>
        </Container>
      )}
    </Segment>
  );
};

export default HospitalDetails;
