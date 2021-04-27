import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Counter from "./Components/Counter/Counter";
import Navbar from "./Components/Navbar/Navbar";
import AddUserForm from "./Components/Form/AddUserForm";
import Pagination from "./Components/Pagination/Pagination";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Counter />
          </Route>
          <Route path="/users">
            <Pagination />
          </Route>
          <Route path="/save-user">
            <AddUserForm />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
