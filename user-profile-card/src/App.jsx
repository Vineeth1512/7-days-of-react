import CounterApp from "./components/CounterApp";

function App() {
  const user = {
    name: "vineeth",
  };

  return (
    <div>
      <CounterApp user={user} />;
    </div>
  );
}

export default App;
