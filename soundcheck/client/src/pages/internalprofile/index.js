import React, {Component} from 'react';
// import LoginCard from "../../components/LoginCard/login-card";
// import PrimaryLogo from "../../media/SOUNDCHECKprimary.png";
import PrimaryLogo from "./soundcheckprimary.png";
import SideBar from "../../components/SideBar/sidebar"
// import Cloudinary from '../../components/Cloudinary/cloudinary';
import ProfileBox from '../../components/ProfileBox/profilebox'
import "./internalprofile.css";

class InternalProfile extends Component {
    render() {
        return (
        <div className="gridcontainer">
            <div className="left">
                <SideBar />
            </div>
            <div className="right">
                <img src={PrimaryLogo} alt="SOUNDCHECK" width="200px"/>
                <div className="row">
                    <ProfileBox />
                    {/* <Cloudinary /> */}
                </div>
                <button className="messagebutton">Message Button</button>
            </div>
        </div>
        )
    }
}

export default InternalProfile;