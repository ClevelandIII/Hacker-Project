import { Switch, Route } from "react-router-dom"
import Home from "./Pages/Home";
// import SingleMovie from "./Pages/SingleMovie"
import './styles/main.css'

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
