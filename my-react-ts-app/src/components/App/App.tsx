import React, { useState } from 'react';
import DocumentCreationForm from './DocumentCreationForm';
import RequestCreationForm from './RequestCreationForm';
import DepartmentApprovalForm from './DepartmentApprovalForm';
import DecisionResult from '../DecisionResult';

const App: React.FC = () => {
  const [document, setDocument] = useState<string | null>(null);
  const [request, setRequest] = useState<string | null>(null);
  const [votes, setVotes] = useState<{ [department: string]: 'approve' | 'reject' | 'abstain' }>({});
  const [decision, setDecision] = useState<'accepted' | 'rejected' | null>(null);

  const handleCreateDocument = (documentContent: string) => {
    setDocument(documentContent);
  };

  const handleSendRequest = (selectedDocument: string) => {
    setRequest(selectedDocument);
  };

  const handleVote = (vote: 'approve' | 'reject' | 'abstain') => {
    // Логика сохранения голоса
    setVotes({ ...votes, [/* Название отдела */]: vote });
  };

  const handleCalculateDecision = () => {
    // Логика подсчета голосов и принятия решения
    setDecision(/* Решение */);
  };

  return (
    <div>
      {!document && <DocumentCreationForm onCreateDocument={handleCreateDocument} />}
      {document && !request && <RequestCreationForm onSendRequest={handleSendRequest} />}
      {request &&
        Object.keys(votes).length < /* Общее количество отделов */ && (
          <div>
            {/* Маппинг по отделам и вывод форм для голосования */}
            {Object.keys(votes).map((department) => (
              <DepartmentApprovalForm key={department} onVote={(vote) => handleVote(vote)} />
            ))}
            <button onClick={handleCalculateDecision}>Подсчитать решение</button>
          </div>
        )}
      {decision && <DecisionResult decision={decision} />}
    </div>
  );
};

export default App;