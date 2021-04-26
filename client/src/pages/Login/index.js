import React, {Component} from 'react';
import SignupCard from "../../components/SignupCard/signup-card";
import LoginCard from "../../components/LoginCard/login-card";
// import PrimaryLogo from "../../media/SOUNDCHECKprimary.png";
import PrimaryLogo from "./soundcheckprimary.png";
import "./login.css"



class Login extends Component {
    render() {
        return (
            <div>
                <div class="logo">
                <img src={PrimaryLogo} alt="Logo" />
                </div>
                <div class="card-container">
                    <div class="login-card">
                        <LoginCard />
                    </div>
                    <div class="signup-card">
                        <SignupCard />
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;