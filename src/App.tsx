import React, { useState } from 'react';

type Todo = {
  id: string;
  isDone: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <>
      {todos.map(({ id }) => (
        <Todo key={id} id={id} setTodos={setTodos} />
      ))}
    </>
  );
}

function Todo({
  id,
  setTodos,
}: {
  id: string;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}) {
  const deleteTodo = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return <div onClick={deleteTodo}></div>;
}

export default App;
