import api from '../components/api';

interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

export const getTodos = async () => {
  const response = await api.get('/todos');
  return response.data;
};
export const addTodo = async (newTodo: Todo) => {
  await api.post('/todos', newTodo);
};
