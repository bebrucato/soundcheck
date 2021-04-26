import React, {Component} from 'react';
// import LoginCard from "../../components/LoginCard/login-card";
// import PrimaryLogo from "../../media/SOUNDCHECKprimary.png";
import PrimaryLogo from "./soundcheckprimary.png";
import SideBar from "../../components/SideBar/sidebar"
import ImageUpload from "../../utils/imageUpload"
import ProfileBox from '../../components/ProfileBox/profilebox'
import "./internalprofile.css";
import logoguitar from "../../images/logoguitar.jpg"

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
                        <div className="media" id="media1"><img className="photo" src={ logoguitar } /></div>
                        <div className="media" id="media2"><img className="photo" src={ logoguitar } /></div>
                        <div className="media" id="media3"><img className="photo" src={ logoguitar } /></div>
                        <div className="media" id="media4"><img className="photo" src={ logoguitar } /></div>
                        <div className="media" id="media5"><img className="photo" src={ logoguitar } /></div>
                        <div className="media" id="media6"><img className="photo" src={ logoguitar } /></div>
                        <div className="media" id="media7"><img className="photo" src={ logoguitar } /></div>
                        <div className="media" id="media8"><img className="photo" src={ logoguitar } /></div>
                        <div className="media" id="media9"><img className="photo" src={ logoguitar } /></div>
                    </div>
                   <ImageUpload />
                </div>
                <button className="messagebutton">Message Button</button>
            </div>
        </div>
        </div>
        )
    }
}

export default InternalProfile;