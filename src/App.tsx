import Counter from './Counter';
import Todo from './Todo';
import UserListFilter from './UserListFilter';

const App = () => {
  return (
    <div>
      <h1>Counter</h1>
      <Counter />
      <hr />
      <h1>Todo With Delete and Edit</h1>
      <Todo />
      <h1>Users List with Filter</h1>
      <UserListFilter />
      <hr />
    </div>
  );
};

export default App;
