import React, {Component} from 'react';
import "./side-bar.css";

class SideBar extends Component {
    render() {
        return (
            <div>
                <second-logo />
                <div className="menu">
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Search</li>
                    <li>Forum</li>
                    <li>Log Out</li>
                </div>
            </div>

            

        )
    }
}

export default SideBar;