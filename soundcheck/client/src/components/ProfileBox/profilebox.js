import React, {Component} from 'react';
import "./profilebox.js"

class ProfileBox extends Component {
    render() {
        return (
            <div>
                <div className="profilebox">
                    <div className="title">
                        Profile
                    </div>
                    <ul>
                        <li>About Me: {}</li>
                        <li>Location: {}</li>
                        <li>Specialty:{}</li>
                        <li>Skills:{}</li>
                        <li>Currently Listening to:{}</li>
                        <li>Preferred Genre:{}</li>
                        <li>Top 3 Favorite Musicians:{}</li>
                        <li>Links:{}</li>
                    </ul>
                </div>
            </div>

            

        )
    }
}

export default ProfileBox;