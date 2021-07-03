import React, { Component } from 'react';
import Header from '../../components/Header_Footer/header';
import Axios from 'axios';

const initialState = {
    "name": '',
    "category": 'General User',
    "email": '',
    "password": '',
    "contact": '',
    "confirmPassword": ''
}

class AddGeneralUser extends Component {
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
        if (!this.state.password === this.state.confirmPassword) {
            alert('Password Mismatch!!');
        }
        let user = {
            "userName": this.state.name,
            "userCategory": this.state.category,
            "userEmail": this.state.email,
            "userPassword": this.state.password,
            "userContact": this.state.contact
        }
        Axios.post('http://localhost:3001/user/addUser', user)
            .then(response => {
                alert('Data added Successfully!');
            }).catch(error => {
                alert(error.message);
            })
    }

    render() {
        return (
            <div>
                <Header /><br/><br /><br /><br /><br />
                <div className="register">
                    <center><h2 class="reg1" style={{ color: "white" }}>Create Account</h2></center><br />
                    <form onSubmit={this.onSubmit}>

                        <span style={{ color: "white" }}>Username</span>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                            placeholder="Enter username"
                            required
                        /><br/>

                        <span style={{ color: "white" }}>Email</span>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            placeholder="Enter email address"
                            required
                        /><br/>

                        <span style={{ color: "white" }}>Password</span>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            placeholder="Enter password"
                            required
                        /><br/>

                        <span style={{ color: "white" }}>Confirm Password</span>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={this.state.confirmPassword}
                            onChange={this.onChange}
                            placeholder="Enter username"
                            required
                        /><br/>

                        <span style={{ color: "white" }}>Contact Number</span>
                        <input
                            type="tel"
                            pattern="[0-9]{10}"
                            className="form-control"
                            id="contact"
                            name="contact"
                            value={this.state.contact}
                            onChange={this.onChange}
                            placeholder="Enter contact number"
                            required
                        />


                        <button type="submit" className="reg">Sign Up</button>
                    </form>
                </div><br/>
            </div>
        )
    }
}

export default AddGeneralUser;