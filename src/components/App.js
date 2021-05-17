import '../App.css';
import React from "react"
//import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Dashboard from "./library/Dashboard"
import rain from "../images/rain.mp3"

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
      <audio src={rain} 
        autoplay="autoplay" loop="loop" controls="controls" hidden="true" />
      <Router>
        
        
        <Routing />
        
      </Router>
    </div>
  );
}

export default App;
