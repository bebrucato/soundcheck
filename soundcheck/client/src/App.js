import React from "react";
<<<<<<< HEAD
// import SideBar from "./components/SideBar/sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
=======
import SideBar from "./components/SideBar/side-bar";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
>>>>>>> 38d94ec36da83fa422e68903237b97759aaca740
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

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
  {...rest}
  render={props =>
  localStorage.getItem("user") ? (
    <Component {...props} />
  ) : (
    <Redirect 
    to={{ 
      pathname: "/",
      state: { from: props.location }
    }}
    />
  )
}
/>
);

function App() {
  return (
    <Router>
      <div>
        <InternalProfile />
        {/* <Landing />
        <SideBar /> */}
        {/* <Signin /> */}
<<<<<<< HEAD
        {/* <Login /> */}
=======
        <Route  exact path="/login" >
       <Login />
       </Route>
>>>>>>> 38d94ec36da83fa422e68903237b97759aaca740
        {/* <SideBar /> 
        <ChatWidget />
        <Card />
        <Form />
        <ImageUpload />  */}

         <Switch>
          <PrivateRoute exact path="/search" component={Search} /> 
          {/* <Route exact path="/signin" component={Signin} />  */}
          {/* <Signin /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
