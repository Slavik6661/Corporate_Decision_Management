import React, { useState } from "react";

interface RequestCreationFormProps {
  onSendRequest: (document: string) => void;
}

const RequestCreationForm: React.FC<RequestCreationFormProps> = ({
  onSendRequest,
}) => {
  const [selectedDocument, setSelectedDocument] = useState<string>("");

  const handleSendRequest = () => {
    // Логика создания заявки
    onSendRequest(selectedDocument);
  };

  return (
    <div>
      {/* Добавьте выпадающий список с доступными документами */}
      <select
        value={selectedDocument}
        onChange={(e) => setSelectedDocument(e.target.value)}
      >
        <option value="document1">Документ 1</option>
        <option value="document2">Документ 2</option>
        {/* Добавьте другие документы */}
      </select>
      <button onClick={handleSendRequest}>Отправить заявку</button>
    </div>
  );
};

export default RequestCreationForm;
