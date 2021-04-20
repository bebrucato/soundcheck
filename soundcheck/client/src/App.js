import React from "react";
import LoginCard from "./components/LoginCard/login-card";
import SideBar from "./components/SideBar/side-bar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChatWidget from "./components/ChatWidget/ChatWidget";
import 'react-chat-widget/lib/styles.css';

function App() {
  return (
    <Router>
      <div>
        <LoginCard />
        <SideBar /> 
        <ChatWidget />

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
