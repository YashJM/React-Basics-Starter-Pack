import Counter from './Counter';
import Todo from './Todo';

const App = () => {
  return (
    <div>
      <h1>Counter</h1>
      <Counter />
      <hr />
      <h1>Todo With Delete and Edit</h1>
      <Todo />
      <hr />
    </div>
  );
};

export default App;
