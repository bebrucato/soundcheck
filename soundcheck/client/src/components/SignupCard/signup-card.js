import React, {Component} from 'react';

class SignupCard extends Component {
    render() {
        return (
                <div>
                    <div className="card-title">
                    SIGN-UP
                    </div>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                            <div id="emailHelp" className="form-text">Password must be 8-16 characters long and contain one uppercase and one lowercase character.</div>
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

export default SignupCard;