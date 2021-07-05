import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import ClientsPage from "./pages/ClientsPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/users/:id">
          <ClientsPage />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
