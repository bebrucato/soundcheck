import React from "react";
import SideBar from "./components/SideBar/side-bar";
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

function App() {
  return (
    <Router>
      <div>
<<<<<<< HEAD
        <Login />
        {/* <Landing />
        <SideBar /> */}
        {/* <LoginCard />
        <SideBar /> 
=======
        {/* <Landing />
        <SideBar /> */}
        <Signin />
        {/* <SideBar /> 
>>>>>>> 310d4ac22df2559710270b64aba793ee4160dcef
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
