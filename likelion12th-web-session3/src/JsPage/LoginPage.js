import React, { useState } from 'react';

import '../App.css';
import '../App.js';
import "../Login.css";

export const UserInfo = {
    id: "dbalsrl",
    password: "7648",
};


const LoginPage = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const EmailHandler = (event) => {
        setId(event.currentTarget.value);
    }
    const PasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }
    return (
        <div className="wrapper_box">
            <h2>LOG IN</h2>
            <form className="login_form">
                <input type="text" className="login_input" placeholder="ID" />
                <input type='id' value={id} onChange={EmailHandler}/>
                <input type='password' value={password} onChange={PasswordHandler}/>
                <input placeholder="Password" type="Password" className="login_input" />
                <button type="submit" className="login_btn">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;