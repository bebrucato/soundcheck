import React, {Component} from 'react';
import LoginCard from "../../components/LoginCard/login-card"
// import "../../components/LoginCard/";
import SignupCard from "../../components/SignupCard/signup-card";
import "./landing.css"

class Signin extends Component {
    render() {
        return (
            <div>
         <LoginCard>
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
    </LoginCard>
<SignupCard>
<div>
                <div className="card-title">SIGN-UP</div>
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
</SignupCard>
          </div>  

        )
    }
}

export default Signin;