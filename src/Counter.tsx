import { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <button
        onClick={() => {
          increment();
        }}>
        Increment
      </button>

      <button
        onClick={() => {
          setCount(0);
        }}>
        reset
      </button>

      <button
        onClick={() => {
          decrement();
        }}>
        decrement
      </button>
      <p>
        Count:<strong>{count}</strong>
      </p>
    </div>
  );
};

export default Counter;
