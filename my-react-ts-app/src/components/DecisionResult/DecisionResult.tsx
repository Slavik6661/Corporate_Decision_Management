import React from 'react';

interface DecisionResultProps {
  decision: 'accepted' | 'rejected';
}

const DecisionResult: React.FC<DecisionResultProps> = ({ decision }) => {
  return <div>Решение: {decision === 'accepted' ? 'Принято' : 'Отклонено'}</div>;
};

export default DecisionResult;