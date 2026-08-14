import { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const haldleCounter = (value) => {
    if (value === 0) {
      setCount(0);
    } else {
      setCount(count + value);
    }
  };

  return (
    <div className="h-screen bg-green-200 text-red p-4 m-2">
      <h1>Counter : {count}</h1>
      <button
        className="bg-yellow-500 p-4 m-1 disabled:bg-gray-300 rounded"
        onClick={() => haldleCounter(1)}
        disabled={count === 10}
      >
        +
      </button>
      <button
        className="bg-yellow-500 p-4 m-1 "
        onClick={() => haldleCounter(-1)}
        disabled={count === 0}
      >
        -
      </button>

      <button className="bg-red-500 p-4 m-2 " onClick={() => setCount(0)}>
        Reset{" "}
      </button>
    </div>
  );
};

export default CounterApp;
