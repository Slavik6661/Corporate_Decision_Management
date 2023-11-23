import React, { useState } from 'react';

interface DocumentCreationFormProps {
  onCreateDocument: (document: string) => void;
}

const DocumentCreationForm: React.FC<DocumentCreationFormProps> = ({ onCreateDocument }) => {
  const [documentContent, setDocumentContent] = useState<string>('');

  const handleCreateDocument = () => {
    // Логика создания документа
    onCreateDocument(documentContent);
  };

  return (
    <div>
      <textarea value={documentContent} onChange={(e) => setDocumentContent(e.target.value)} />
      <button onClick={handleCreateDocument}>Создать документ</button>
    </div>
  );
};

export default DocumentCreationForm;