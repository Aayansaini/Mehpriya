import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  Switch,
  browserHistory,
} from "react-router-dom";
// import { Loading } from './components/Loding';
// import { Login } from './Product Files/Login';
import { Home } from "./Componants/Home/Home";
import { Login } from "./Componants/Login/Login";
import { Products } from "./Componants/Product/Products";
import { Navbar } from "./Componants/Navbar";
import { Footer } from "./Componants/Footer/Footer";
import { Cat } from "./Componants/Categories/Cat";
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/Categories" component={Cat} />
          <Route exact path="/product" component={Products} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}
export default App;
