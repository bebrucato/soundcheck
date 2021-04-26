import React, {Component} from 'react';
import "./sidebar.css";
import SecondLogo from "./soundchecksecondary.png"

function onClickHandler(){
    window.location="/"
   };
function Searching(){
    window.location="/search"
}
function Home(){
    window.location="/home"
}
class SideBar extends Component {
    render() {
        return (
            <div>
                <div className="side-bar">
                    <img src={SecondLogo} alt="SOUNDCHECK" width="200px"/>
                    <div className="menu">
                        <li onClick={Home}>Home</li>
                        <li>Profile</li>
                        <li onClick={Searching}>Search</li>
                        <li>Forum</li>
                        <li onClick={onClickHandler}>Log Out</li>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideBar;