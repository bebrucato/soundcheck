import React, {Component} from 'react';
import "./sidebar.css";
import SecondLogo from "./soundchecksecondary.png"

class SideBar extends Component {
    render() {
        return (
            <div>
                <div className="side-bar">
                    <img src={SecondLogo} alt="SOUNDCHECK" width="200px"/>
                    <div className="menu">
                        <li>Home</li>
                        <li>Profile</li>
                        <li>Search</li>
                        <li>Forum</li>
                        <li>Log Out</li>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideBar;