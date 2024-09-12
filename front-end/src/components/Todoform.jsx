import { useState } from 'react';

const TodoForm = ({ addTodo, closeModal, error }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(''); 
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !category) return; 

    addTodo(title, description, category);

    setTitle("");
    setDescription("");
    setCategory("");
    closeModal(); 
  };

  return (
    <div className='todo-form'>
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <label>Título:</label>
        <input 
          type="text" 
          placeholder='Digite o título' 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required
        />
        <label>Descrição:</label>
        <input 
          type="text" 
          placeholder='Digite a descrição' 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required
        />
        <label>Status:</label>
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Selecione o status da tarefa</option>
          <option value="Pendente">Pendente</option>
          <option value="Em andamento">Em andamento</option>
        </select>
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
