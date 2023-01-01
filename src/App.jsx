import "./App.css";
import Navigation from "./components/Navigation";
import Router from "./routing";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Router />
    </div>
  );
}

export default App;
