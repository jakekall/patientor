import React from 'react';
import { Icon, Header, List, Segment, SemanticCOLORS } from 'semantic-ui-react';
import DiagnosisList from './DiagnosisList';
import { HealthCheckEntry } from '../types';

const HealthCheckDetails: React.FC<{ entry: HealthCheckEntry }> = ({
  entry,
}) => {
  const heartColor = (rating: number): SemanticCOLORS => {
    const colors: SemanticCOLORS[] = ['green', 'yellow', 'orange', 'red'];
    if (rating < 0 || rating >= colors.length) {
      return 'grey';
    }
    return colors[rating];
  };

  return (
    <Segment>
      <Header as="h3">
        {entry.date} <Icon name="user md" />
      </Header>
      <List>
        <List.Item>{entry.specialist}</List.Item>
        <List.Item style={{ fontStyle: 'italic' }}>
          {entry.description}
        </List.Item>
        <List.Item>
          <Icon name="heart" color={heartColor(entry.healthCheckRating)} />
        </List.Item>
      </List>
      {entry.diagnosisCodes && (
        <DiagnosisList diagnosisCodes={entry.diagnosisCodes} />
      )}
    </Segment>
  );
};

export default HealthCheckDetails;
