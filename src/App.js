import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link, Switch} from 'react-router-dom';
import { Loading } from './components/Loding';
import { Login } from './Product Files/Login';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Loading}/>
        <Route exact path="/Login" component={Login}/>
      </Switch>
    </Router>
  );
};
export default App;
