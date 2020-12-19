import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Icon, Header, List } from 'semantic-ui-react';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';

import { Patient } from '../types';
import { apiBaseUrl } from '../constants';
import { useStateValue, setPatient } from '../state';
import EntryDetails from './EntryDetails';

const PatientInfoPage: React.FC = () => {
  const [{ patients }, dispatch] = useStateValue();
  const { id } = useParams<{ id: string }>();
  const patient = patients[id];

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const { data: patient } = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${id}`
        );
        dispatch(setPatient(patient));
      } catch (e) {
        console.error(e);
      }
    };
    if (!patient?.ssn) {
      fetchPatient();
    }
  }, [dispatch, patient, id]);

  if (!patient) {
    return null;
  }

  const genderIconName = (gender: string): SemanticICONS => {
    switch (gender) {
      case 'male':
        return 'mars';
      case 'female':
        return 'venus';
      default:
        return 'genderless';
    }
  };

  return (
    <div className="App">
      <Container>
        <Header as="h2">
          {patient.name}
          <Icon name={genderIconName(patient.gender)} />
        </Header>
        <List>
          <List.Item>snn: {patient.ssn}</List.Item>
          <List.Item>occupation: {patient.occupation}</List.Item>
        </List>
        <Header as="h3">Entries</Header>
        {patient.entries && patient.entries.length > 0 ? (
          patient.entries.map((entry) => (
            <EntryDetails key={entry.id} entry={entry} />
          ))
        ) : (
          <p>No entries...</p>
        )}
      </Container>
    </div>
  );
};

export default PatientInfoPage;
