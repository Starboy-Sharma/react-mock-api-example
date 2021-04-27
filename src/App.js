import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Counter from "./Components/Counter/Counter";
import Users from "./Components/Users/Users";
import Navbar from "./Components/Navbar/Navbar";
import AddUserForm from "./Components/Form/AddUserForm";

function App() {
  return (
    <div className="container">
      <h1> Welcome to Application </h1>

      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Counter />
          </Route>
          <Route path="/users">
            <Users />
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
