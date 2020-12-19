import React from 'react';
import { useStateValue } from '../state';
import { Diagnosis } from '../types';

const DiagnosisInfo: React.FC<{ code: Diagnosis['code'] }> = ({ code }) => {
  const [{ diagnoses }] = useStateValue();
  const diagnosis = diagnoses[code];

  if (!diagnosis) {
    return <span>{code}</span>;
  }

  return (
    <span>
      {code} {diagnosis.name}
    </span>
  );
};

export default DiagnosisInfo;
