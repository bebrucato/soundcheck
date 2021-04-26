import React, {Component} from 'react';
// import LoginCard from "../../components/LoginCard/login-card";
// import PrimaryLogo from "../../media/SOUNDCHECKprimary.png";
import PrimaryLogo from "./soundcheckprimary.png";
import "./landing.css";

function onClickHandler(){
 window.location="/login"
};
class Landing extends Component {
    render() {
        return (
        <div>
            <div className="hero">
                <img src={PrimaryLogo} alt="SOUNDCHECK"/>
                <button onClick={onClickHandler} className="landing-button" >Login // Sign Up</button>
            </div>
        </div>
        )
    }
}

export default Landing;