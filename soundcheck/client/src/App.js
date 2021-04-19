import React from "react";
import LoginCard from "./components/LoginCard/login-card";
import SideBar from "./components/SideBar/side-bar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <LoginCard />
        <SideBar /> 
         {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
