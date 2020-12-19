import React from 'react';
import { Icon, Header, List, Segment, Container } from 'semantic-ui-react';
import DiagnosisList from './DiagnosisList';
import { OccupationalHealthcareEntry } from '../types';

const OccupationalHealthcareDetails: React.FC<{
  entry: OccupationalHealthcareEntry;
}> = ({ entry }) => {
  return (
    <Segment>
      <Header as="h3">
        {entry.date} <Icon name="stethoscope" /> {entry.employerName}
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
      {entry.sickLeave && (
        <Container style={{ marginTop: '1rem' }}>
          <Header sub>Sick Leave</Header>
          <p>{`from: ${entry.sickLeave.startDate} to: ${entry.sickLeave.endDate}`}</p>
        </Container>
      )}
    </Segment>
  );
};

export default OccupationalHealthcareDetails;
