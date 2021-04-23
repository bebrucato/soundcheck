import { set } from 'mongoose';
import {useHistory} from "react-router-dom";
import React, { useState } from 'react';
import API from "../../utils/API";

function SignupCard() {
    const history = useHistory()
    var [form,setForm]=useState({});
    function onChangeHandler({target:{name,value}}) {
        console.log(name,value)
      setForm({
        ...form,
        [name]:value
      })  
    };
    function onClickHandler(){
        API.signUp(form).then( (res)=>{
            setForm({})
            localStorage.setItem("user",JSON.stringify(res.data.user))
            history.push("/home")
        })
    };


    return (
        <div>
            <div className="card-title">
                SIGN-UP
                    </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">First name </label>
                    <input type="text" name="firstName" value={form.firstName} onChange={onChangeHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Last name</label>
                    <input type="text" name="lastName" value={form.LastName} onChange={onChangeHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Username</label>
                    <input type="text" className="form-control" value={form.username} name="username" onChange={onChangeHandler} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={form.email} name="email" onChange={onChangeHandler} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" value={form.password} name="password" onChange={onChangeHandler} id="exampleInputPassword1" />
                    <div id="emailHelp" className="form-text">Password must be 8-16 characters long and contain one uppercase and one lowercase character.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Location</label>
                    <input type="text" className="form-control" value={form.location} name="location" onChange={onChangeHandler} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Keep me logged in</label>
                </div>
                <button className="submit-button" onClick={onClickHandler}>Submit</button>
        </div>
    )
}

export default SignupCard;