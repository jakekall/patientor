import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Icon, Header, List } from 'semantic-ui-react';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';

import { Patient } from '../types';
import { apiBaseUrl } from '../constants';
import { useStateValue, setPatient } from '../state';

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
    if (!patient) {
      fetchPatient();
    }
  }, [dispatch, patient, id]);

  if (!patient) {
    return null;
  }

  let genderIconName: SemanticICONS;
  switch (patient.gender) {
    case 'male':
      genderIconName = 'mars';
      break;
    case 'female':
      genderIconName = 'venus';
      break;
    default:
      genderIconName = 'genderless';
  }

  return (
    <div className="App">
      <Container>
        <Header as="h2">
          {patient.name}
          <Icon name={genderIconName} />
        </Header>
        <List>
          <List.Item>snn: {patient.ssn}</List.Item>
          <List.Item>occupation: {patient.occupation}</List.Item>
        </List>
      </Container>
    </div>
  );
};

export default PatientInfoPage;
