import React, {Component} from 'react';

class LoginCard extends Component {
    render() {
        return (
            <div>
                <div className="card-title">LOGIN</div>
                <form>
                    <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Username</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Keep me logged in</label>
                    </div>
                    <button className="submit-button">Submit</button>
                </form>
            </div>

            

        )
    }
}

export default LoginCard;