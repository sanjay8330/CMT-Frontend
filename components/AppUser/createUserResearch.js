import React, { Component } from 'react';
import Header from '../../components/Header_Footer/header';
import Axios from 'axios';
import firebase from '../../Firebase/firebase';
import '../../css/App.css';

const initialState = {
    "name": '',
    "category": 'General User',
    "email": '',
    "password": '',
    "contact": '',
    "confirmPassword": '',
    "authorName": '',
    "authorEmail": '',
    "authorPhone": '',
    "title": '',
    "description": '',
    "approvalStatus": 'Pending Approval',
    "fileURL": '',
    "eventStatus": 'Unreserved'
}

export default class UserPlusResearch extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.state = initialState;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    async onFileChange(e) {
        const file = e.target.files[0];
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file).then(() => {
            alert('File Uploaded Successfully!!', file.name);
            document.getElementById("submitBtn").disabled = false;
        })
        const downloadURL = await fileRef.getDownloadURL();
        console.log('Download URL', downloadURL);
        this.setState({ fileURL: downloadURL });
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
                let research = {
                    "authorName": this.state.name,
                    "authorEmail": this.state.email,
                    "authorContact": this.state.contact,
                    "researchTitle": this.state.title,
                    "researchDescription": this.state.description,
                    "approvalStatus": this.state.approvalStatus,
                    "downloadURL": this.state.fileURL,
                    "eventStatus": this.state.eventStatus
                }
                Axios.post('http://localhost:3001/research/insertResearch', research)
                    .then(response => {
                        alert('User & Research Paper Added Successfully');
                        window.location = `/loggedHome/${this.state.email}`
                    }).catch(error => {
                        alert('Error :', error.message);
                    })
            }).catch(error => {
                alert(error.message);
            })
    }

    render() {
        return (
            <div>
                <Header /><br /><br /><br /><br /><br />
                <div className="add6">
                    <center><h2 class="log" style={{ color: "white" }}>User Details</h2></center><br />
                    <form onSubmit={this.onSubmit} style={{ height: "100px;" }}>

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
                        /><br />

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
                            required
                        /><br />

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
                        /><br />

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
                        /><br />

                        <hr style = {{color: "#10ebd5"}}/>
                        <center><h2 class="reg1" style={{ color: "white" }}>Research Paper Details</h2></center><br />

                        <span style={{ color: "white" }}>Research Paper Title</span>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={this.state.title}
                            onChange={this.onChange}
                            required
                            placeholder="Enter title"
                        /><br />

                        <span style={{ color: "white" }}>Research Paper Description</span>
                        <textarea
                            className="form-control"
                            id="description"
                            rows="3"
                            name="description"
                            value={this.state.description}
                            onChange={this.onChange}
                            required
                            placeholder="Enter description">
                        </textarea><br />

                        <span style={{ color: "white" }}>Upload Research Paper</span>
                        <input
                            type="file"
                            className="form-control"
                            id="file"
                            name="file"
                            onChange={this.onFileChange}
                            required
                        /><br />

                        <button type="submit" className="btn btn-primary" id="submitBtn" disabled>Submit</button>
                    </form>
                </div><br />
            </div>
        )
    }
}