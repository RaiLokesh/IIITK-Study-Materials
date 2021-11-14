import '../App.css';
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Dashboard from "./library/Dashboard"

const Routing = () =>{
  return (
    <Switch>
      
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/folder/:folderId" component={Dashboard} />
      
    </Switch>
  )
}

function App() {
  return (
    
    <div>
      <Router>
        <Routing />
      </Router>
    </div>
  );
}

export default App;
