import React, { Component } from "react";
import "./Login.css";
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // 0 for not logged in, 2 for loggin in, 1 for logged in
            login: 0,
            failed: false
        }
    }

    handleSubmit = e => {
        this.setState({login:2})
        // Preventing page reload
        e.preventDefault();

        // Getting Form Elements
        // ------------------
        const {
            username,
            password
        } = e.target;

        // Form data object
        // ----------------------
        const obj = {
            username: username.value,
            password: password.value
        };

        console.log(obj);

        axios({
            url: `${process.env.REACT_APP_CONNECTION_STRING}/api/users`,
            method: 'PUT',
            data: obj
        }).then((res, err) => {
            if (err) {
                this.setState({login:0})
                return err
            }
            if (res === 200 || "OK") {
                this.setState({login:1})
            } else {
                this.setState({
                    login: 0,
                    failed: true
                })
            }
        })
    };

    render() {
        return (
            <div className="login">
                <h2>Log In</h2>
                <hr />

                {/*
          ===================
          Login Form
          ===================
          */}
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <form onSubmit={this.handleSubmit} className="center">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    id="username"
                                    type="text"
                                    name="username"
                                    className="form-control"
                                    placeholder="Enter username"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                />
                            </div>

                            {this.state.login === 0 &&
                                <button type="submit" className="btn btn-outline-success col-12 mt-2">
                                    Log In
                        </button>}

                            {this.state.login === 1 &&
                                <button type="submit" disabled className="btn btn-outline-success col-12 mt-2">
                                    Success!
                        </button>}

                            {this.state.login === 2 &&
                                <button type="submit" disabled className="btn btn-outline-success col-12 mt-2">
                                    Logging in...
                        </button>}
                        </form>
                        <p className="mt-3 text-center" >Don't have an account? <a href="/createUser">Create one here!</a></p>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        );
    }
}

export default Login;
