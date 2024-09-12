import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Todo from './components/Todo';
import Search from './components/Search';
import Filter from './components/Filter';
import Edit from './components/Edit';


function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("Todas")

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editStatus, setEditStatus] = useState("");

  // Função para buscar a lista de tarefas da API
  const fetchTodos = async () => {
    try {
      const response = await axios.get('https://localhost:7093/api/lista');
      setTodos(response.data);
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Adicionar nova tarefa
  const addTodo = async (title, description, category) => {
    try {
      const newTodo = {
        Título: title.trim(),
        Descrição: description.trim(),
        Status: category.trim(),
      };

      await axios.post('https://localhost:7093/api/lista', newTodo, {
        headers: { 'Content-Type': 'application/json' },
      });

      fetchTodos();
      closeModal();
    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error.response?.data || error.message);
    }
  };

  // Deletar tarefa
  const removeTodo = (id) => {
    axios.delete(`https://localhost:7093/api/lista/${id}`);

    const newTodos = [...todos];
    const filteredTodos = newTodos.filter(todo =>
      todo.id !== id
    );
    setTodos(filteredTodos);
  };

  // Completar tarefa
  const completeTodo = async (id) => {
    axios.put(`https://localhost:7093/api/lista/${id}`, {
      Status: 'Completo',
    });

    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: true, status: 'Completo' } : todo
    );

    setTodos(newTodos);
  };

  // Editar o status da tarefa
  const editTodo = (id) => {
    setEditId(id);
    const todoToEdit = todos.find(todo => todo.id === id);
    setEditStatus(todoToEdit?.status || "");
  };

  // Função para salvar as edições
  const saveEdit = async (newStatus) => {
    if (editId) {
      try {
        await axios.put(`https://localhost:7093/api/lista/${editId}`, {
          Status: newStatus,
        });

        const updatedTodos = todos.map((todo) =>
          todo.id === editId ? { ...todo, status: newStatus } : todo
        );

        setTodos(updatedTodos);
        setEditId(null);
        setEditStatus("");
      } catch (error) {
        console.error('Erro ao editar tarefa:', error);
      }
    }
  };

  // Função para cancelar a edição
  const cancelEdit = () => {
    setEditId(null);
    setEditStatus("");
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} addTodo={addTodo} />
      <div className="todo-list">
        {todos
          // Filtrar por status
          .filter((todo) =>
            filter === "Todas" ? true :
            filter === "Completas" ? todo.status === 'Completo' :
            filter === "Em andamento" ? todo.status === 'Em andamento' :
            filter === "Pendente" ? todo.status === 'Pendente' : false
          )
          // Filtrar por pesquisa
          .filter((todo) =>
            todo.título?.toLowerCase().includes(search.toLowerCase()) ||
            todo.descrição?.toLowerCase().includes(search.toLowerCase())
          )
          .map((todo) => (
            <div key={todo.id}>
              <Todo
                todo={todo}
                editTodo={editTodo}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
              />
              {editId === todo.id && (
                <Edit currentStatus={editStatus} onSave={saveEdit} onCancel={cancelEdit} />
              )}
            </div>
          ))}
      </div>
    </div>
  );
}


export default App;
