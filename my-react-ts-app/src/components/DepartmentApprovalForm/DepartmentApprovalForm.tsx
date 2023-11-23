import React, { useState } from 'react';

interface DepartmentApprovalFormProps {
  onVote: (vote: 'approve' | 'reject' | 'abstain') => void;
}

const DepartmentApprovalForm: React.FC<DepartmentApprovalFormProps> = ({ onVote }) => {
  const [selectedVote, setSelectedVote] = useState<'approve' | 'reject' | 'abstain'>('approve');

  const handleVote = () => {
    // Логика голосования
    onVote(selectedVote);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="approve"
          checked={selectedVote === 'approve'}
          onChange={() => setSelectedVote('approve')}
        />
        Согласовать
      </label>
      <label>
        <input
          type="radio"
          value="reject"
          checked={selectedVote === 'reject'}
          onChange={() => setSelectedVote('reject')}
        />
        Отклонить
      </label>
      <label>
        <input
          type="radio"
          value="abstain"
          checked={selectedVote === 'abstain'}
          onChange={() => setSelectedVote('abstain')}
        />
        Воздержаться
      </label>
      <button onClick={handleVote}>Голосовать</button>
    </div>
  );
};

export default DepartmentApprovalForm;