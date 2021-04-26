import React, {Component} from 'react';
// import LoginCard from "../../components/LoginCard/login-card";
// import PrimaryLogo from "../../media/SOUNDCHECKprimary.png";
import PrimaryLogo from "./soundcheckprimary.png";
import SideBar from "../../components/SideBar/sidebar"
// import Cloudinary from '../../components/Cloudinary/cloudinary';
import ProfileBox from '../../components/ProfileBox/profilebox'
import "./internalprofile.css";
import { checkout } from '../../../../../routes/api/users';


class InternalProfile extends Component {
    render() {
        return (
        <div>
        <div className="gridcontainer">
            <div className="left">
                <SideBar />
            </div>
            <div className="right">
                <img src={PrimaryLogo} alt="SOUNDCHECK" width="200px"/>
                <div className="row">
                    <ProfileBox />
                    <div className="cloudinary">
                        <div className="media" id="media1">{}</div>
                        <div className="media" id="media2">{}</div>
                        <div className="media" id="media3">{}</div>
                        <div className="media" id="media4">{}</div>
                        <div className="media" id="media5">{}</div>
                        <div className="media" id="media6">{}</div>
                        <div className="media" id="media7">{}</div>
                        <div className="media" id="media8">{}</div>
                        <div className="media" id="media9">{}</div>
                    </div>
                    {/* <Cloudinary /> */}
                </div>
                <button className="messagebutton">Message Button</button>
            </div>
        </div>
        </div>
        )
    }
}

export default InternalProfile;