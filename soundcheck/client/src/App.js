import React from "react";
import LoginCard from "./components/LoginCard/login-card";
import SideBar from "./components/SideBar/side-bar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChatWidget from "./components/ChatWidget/ChatWidget";
import 'react-chat-widget/lib/styles.css';
import Card from "./components/Card/index";
import Form from "./components/Form/index";
import ImageUpload from "./utils/imageUpload";
import Search from "./pages/Search";
import Signin from "./pages/Signin";

function App() {
  return (
    <Router>
      <div>
        <SideBar />
        {/* <LoginCard />
        <SideBar /> 
        <ChatWidget />
        <Card />
        <Form />
        <ImageUpload /> */}

         <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/signin" component={Signin} />
          <Signin />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
