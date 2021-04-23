import React, { useState, useEffect } from 'react';
import "./login-card.css"
import API from "../../utils/API";

function LoginCard() {
    var [form,setForm]=useState({});
    function onChangeHandler({target:{name,value}}) {
        console.log(name,value)
      setForm({
        ...form,
        [name]:value
      })  
    };
    function onClickHandler(){
        API.login(form).then( ()=> 
            setForm({})
        )
    };
    return (
        <form >
        <div>
            <div className="card-title">LOGIN</div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Username</label>
                    <input type="text"   name="username" onChange={onChangeHandler}
                    className="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" onChange={onChangeHandler} 
             className="form-control"  id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Keep me logged in</label>
                </div>
                <button className="submit-button" onClick={onClickHandler}>Submit</button>
        </div>
        </form>



    )
}


export default LoginCard;