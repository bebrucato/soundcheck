import React from "react";
// import SideBar from "./components/SideBar/sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChatWidget from "./components/ChatWidget/ChatWidget";
import 'react-chat-widget/lib/styles.css';
import Card from "./components/Card/index";
import Form from "./components/Form/index";
import ImageUpload from "./utils/imageUpload";
import Search from "./pages/Search";
import Signin from "./pages/Signin";
import Landing from "./pages/Landing/index"
import Login from "./pages/Login/index"
import InternalProfile from "./pages/internalprofile";

function App() {
  return (
    <Router>
      <div>
        <InternalProfile />
        {/* <Landing />
        <SideBar /> */}
        {/* <Signin /> */}
        {/* <Login /> */}
        {/* <SideBar /> 
        <ChatWidget />
        <Card />
        <Form />
        <ImageUpload />  */}

         <Switch>
          {/* <Route exact path="/" component={Search} />
          <Route exact path="/signin" component={Signin} /> */}
          {/* <Signin /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
