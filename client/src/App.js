import React from "react";
import SideBar from "./components/SideBar/sidebar";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
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
      <Switch>
          <Route  exact path="/" component={Landing} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/home" component={InternalProfile}/>
          <PrivateRoute exact path="/search" component={Search} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
