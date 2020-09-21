import React from "react";
import "./App.css";
import Home from "./Components/Home";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:question_id" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
