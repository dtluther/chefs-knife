import './App.css';
import { NavBarUpper } from "./components/NavBarUpper";
import { NavBarMain } from "./components/NavBarMain";
import { Product } from "./components/Product";

function App() {
  return (
    <div className="App">
      <NavBarUpper />
      <NavBarMain />
      <Product />
    </div>
  );
}

export default App;
