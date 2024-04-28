import React, { useState } from 'react';

import '../App.css';
import '../App.js';
import "../Login.css";


export const UserInfo = {
    id: "dbalsrl",
    password: "7648",
};

const LoginPage = ({ onLogin }) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const IdHandler = (event) => {
        setId(event.currentTarget.value);
    }

    const PasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (id === UserInfo.id && password === UserInfo.password) {
            onLogin(true);
        } else {
            alert('로그인에 실패하셨습니다.');
        }
    }

    return (
        <div className="wrapper_box">
            <h2>LOG IN</h2>
            <form className="login_form" onSubmit={handleSubmit}>
                <input type="text" className="login_input" placeholder="ID" value={id} onChange={IdHandler}/>
                <input type="password" className="login_input" placeholder="Password" value={password} onChange={PasswordHandler}/>
                <button type="submit" className="login_btn">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
