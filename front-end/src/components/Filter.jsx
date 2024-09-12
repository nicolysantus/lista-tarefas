import React, { useState } from 'react';
import Modal from 'react-modal';
import TodoForm from './Todoform';

Modal.setAppElement('#root'); 

export default function Filter({ filter, setFilter, addTodo, error, setError }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setError("");
  };

  return (
    <div className='filter'>
      <h2>Filtrar:</h2>
      <div className='filter-options'>
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="Todas">Todas</option>
            <option value="Completas">Completas</option>
            <option value="Em andamento">Em andamento</option>
            <option value="Pendente">Pendente</option>
          </select>
        </div>
        <div>
          <h2>Criar tarefa:</h2>
          <button onClick={openModal}>Adicionar nova tarefa</button>
        </div>
      </div>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Criar Tarefa"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <button onClick={closeModal} className="modal-close">X</button>
        <TodoForm addTodo={addTodo} closeModal={closeModal} error={error}/>
      </Modal>
    </div>
  );
}
