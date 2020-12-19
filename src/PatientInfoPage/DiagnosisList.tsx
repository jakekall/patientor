import React from 'react';
import { Container, Header, List } from 'semantic-ui-react';
import { Diagnosis } from '../types';
import DiagnosisInfo from './DiagnosisInfo';

const DiagnosisList: React.FC<{ diagnosisCodes: Array<Diagnosis['code']> }> = ({
  diagnosisCodes,
}) => {
  return (
    <Container>
      <Header sub>Diagnosis</Header>
      <List bulleted>
        {diagnosisCodes.map((code) => (
          <List.Item key={code}>
            <DiagnosisInfo code={code} />
          </List.Item>
        ))}
      </List>
    </Container>
  );
};

export default DiagnosisList;
