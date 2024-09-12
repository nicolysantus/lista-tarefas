import React, { useState } from 'react';

const Edit = ({ currentStatus, onSave, onCancel }) => {
  const [selectedStatus, setSelectedStatus] = useState(currentStatus);

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleSave = () => {
    onSave(selectedStatus);
  };

  return (
    <div className="edit-form">
      <label>
        <input
          type="radio"
          name="status"
          value="Pendente"
          checked={selectedStatus === "Pendente"}
          onChange={handleStatusChange}
        />
        Pendente
      </label>
      <label>
        <input
          type="radio"
          name="status"
          value="Em andamento"
          checked={selectedStatus === "Em andamento"}
          onChange={handleStatusChange}
        />
        Em andamento
      </label>
      <div className="edit-buttons">
        <button onClick={handleSave}>Salvar</button>
        <button onClick={onCancel}>Cancelar</button>
      </div>
    </div>
  );
};

export default Edit;
