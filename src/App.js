import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="container">
        <Weather defaultCity="Paris" />
      </header>
    </div>
  );
}

export default App;
