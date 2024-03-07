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
export const deleteTodo = async (id: string) => {
  await api.delete(`/todos/${id}`);
};
export const updateTodo = async (payload: { id: string; updateTodo: Todo }) => {
  const { id, updateTodo } = payload;
  await api.patch(`/todos/${id}`, updateTodo);
};
