import React, { Component } from 'react';
import Header from '../../components/Header_Footer/header';
import Axios from 'axios';

const initialState = {
    "email": '',
    "password": '',
    "users": []
}

class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        Axios.get(`http://localhost:3001/user/validateUser/${this.state.email}`)
            .then(response => {
                this.setState({ users: response.data.data });
                console.log(this.state.users.length);

                //Handle the invalid login
                if (this.state.users.length == 0) {
                    alert('User Not found!!!');
                }

                this.state.users.length > 0 && this.state.users.map((item, key) => {
                    if (item.userPassword === this.state.password) {
                        if (item.userCategory === 'General User') {
                            window.location = `/loggedHome/${item.userEmail}`;
                        }
                        if (item.userCategory === 'Reviewer') {
                            window.location = '/reviewerDashboard';
                        }
                        if (item.userCategory === 'Editor') {
                            window.location = '/editorDashboard';
                        }
                        if (item.userCategory === 'Administrator') {
                            window.location = '/adminDashboard';
                        }

                    } else {
                        alert('Password or Username is Invalid!!');
                    }
                })
            }).catch(error => {
                alert('Error ', error.message);
            })
    }

    render() {
        return (
            <div>
                <Header /><br /><br /><br /><br /><br />
                <div className="login">
                    <center><h2 class="log" style={{ color: "white" }}>Login to Account</h2></center><br /><br />
                    <form onSubmit={this.onSubmit}>

                        <span style={{ color: "white" }}>Email</span>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            placeholder="Enter email address"
                        /><br />

                        <span style={{ color: "white" }}>Password</span>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            placeholder="Enter password"
                        /><br />

                        <button type="submit" className="signin">Login</button><br />
                        <center><a href="/signUpHome">Create New account</a></center>
                    </form>
                </div><br/>
            </div>

        )
    }
}

export default UserLogin;