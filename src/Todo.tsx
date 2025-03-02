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

  const [editingMode, setEditingMode] = useState<boolean>(false);
  const [editingId, setEditingId] = useState<number>(0);

  const saveTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (editingMode) {
      const newTodos = todos.map((todo) => {
        if (todo.id === editingId) {
          return { ...todo, label: input };
        }
        return todo;
      });

      setTodos(newTodos);
      resetForm();
      return;
    }

    setTodos([
      ...todos,
      { id: todos.length, label: input, pinned: false, done: false },
    ]);

    resetForm();
  };

  const resetForm = () => {
    setInput('');
    setEditingMode(false);
  };

  const deleteToDo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onEdit = (id: number) => {
    setEditingId(id);
    setInput(todos.find((todo) => todo.id === id)!.label);
    setEditingMode(true);
  };

  return (
    <div>
      <form onSubmit={saveTodo}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type='submit'>{editingMode ? 'Save' : 'Add'}</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <>
            <li key={todo.id}>
              <button onClick={() => onEdit(todo.id)}>📝</button>
              &nbsp;
              {todo.label}&nbsp;&nbsp;
              <button onClick={() => deleteToDo(todo.id)}>X</button>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
