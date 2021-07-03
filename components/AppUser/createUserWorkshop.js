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
    "conductorName": '',
    "conductorEmail": '',
    "conductorPhone": '',
    "workshopTitle": '',
    "workshopDescription": '',
    "workshopSpeakers": '',
    "fileURL": '',
    "eventStatus": 'Unreserved'
}

export default class UserPlusWorkshop extends Component {
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

    //Upload the workshop flyer
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

        //In case the above code fails  -due to time to upload and set the download URL
        /*
        const downloadURL = await fileRef.getDownloadURL().then(() => {
            console.log('Download URL', downloadURL);
            this.setState({ fileURL: downloadURL });
        })
        */
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
                let workshop = {
                    "workshopConductorName": this.state.name,
                    "workshopConductorEmail": this.state.email,
                    "workshopConductorPhone": this.state.contact,
                    "workshopTitle": this.state.workshopTitle,
                    "workshopDescription": this.state.workshopDescription,
                    "workshopSpeakers": this.state.workshopSpeakers,
                    "approvalStatus": 'Approval Pending',
                    "downloadURL": this.state.fileURL,
                    "eventStatus": this.state.eventStatus
                }
                Axios.post('http://localhost:3001/workshop/insertWorkshop', workshop)
                    .then(response => {
                        alert('User & Workshop Details Added Successfully');
                        window.location = `/loggedHome/${this.state.email}`
                    }).catch(error => {
                        alert('Error ', error.message);
                    })

            }).catch(error => {
                alert(error.message);
            })
    }


    render() {
        return (
            <div>
                <Header /><br /><br /><br /><br /><br />
                <div className="add7">
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
                            required
                            placeholder="Enter contact number"
                        /><br />
                        <hr style={{ color: "#10ebd5" }} />

                        <center><h2 class="reg1" style={{ color: "white" }}>Workshop Details</h2></center><br />

                        <span style={{ color: "white" }}>Workshop Title</span>
                        <input
                            type="text"
                            className="form-control"
                            id="workshopTitle"
                            name="workshopTitle"
                            value={this.state.workshopTitle}
                            onChange={this.onChange}
                            placeholder="Enter workshop Title"
                            required
                        /><br />

                        <span style={{ color: "white" }}>Workshop Description</span>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            name="workshopDescription"
                            value={this.state.workshopDescription}
                            onChange={this.onChange}
                            placeholder="Enter workshop Description"
                            required>
                        </textarea><br />

                        <span style={{ color: "white" }}>Workshop Speakers</span>
                        <textarea
                            className="form-control"
                            id="workshopSpeakers"
                            rows="3"
                            name="workshopSpeakers"
                            value={this.state.workshopSpeakers}
                            onChange={this.onChange}
                            placeholder="Enter workshop Speakers"
                            required>
                        </textarea><br />

                        <span style={{ color: "white" }}>Upload Workshop Flyer</span>
                        <input
                            type="file"
                            className="form-control"
                            id="file"
                            name="file"
                            onChange={this.onFileChange}
                        /><br />

                        <button type="submit" className="btn btn-primary" id="submitBtn" disabled>Submit</button>
                    </form>
                </div><br />
            </div>
        )
    }
}