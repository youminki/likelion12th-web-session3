import React from 'react';
import '../App.css';
import '../App.js';

export const UserInfo = {
    id: "dbalsrl",
    password: "7648",
};

import React, { useState } from "react";
import "./Login.css";

const [Email, setEmail] = useState("");
const [Password, setPassword] = useState("");
출처: https://12716.tistory.com/entry/ReactJS-로그인-페이지-구현하기 [공부하는 개발자 강씨네:티스토리]

const LoginPage = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="wrapper_box">
            <h2>LOG IN</h2>
            <form className="login_form">
                <input type="text" className="login_input" placeholder="ID" />
                <input placeholder="Password" type="Password" className="login_input" />
                <button type="submit" className="login_btn">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;