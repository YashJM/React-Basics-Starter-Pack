import { useState } from 'react';

interface todo {
  id: number;
  label: string;
  pinned: boolean;
  done: boolean;
}

const Todo: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [todos, setTodos] = useState<todo[]>([]);

  const addToDo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: todos.length, label: input, pinned: false, done: false },
    ]);
  };

  const deleteToDo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <form onSubmit={addToDo}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type='submit'>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <>
            <li key={todo.id}>
              {todo.label}&nbsp;&nbsp;
              <button onClick={() => deleteToDo(todo.id)}> X</button>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
