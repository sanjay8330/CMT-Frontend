import React, { Component } from 'react';
import Axios from 'axios';
import Header from '../../components/Header_Footer/loggedHeader';
import firebase from '../../Firebase/firebase';

const initialStates = {
    "conductorName": '',
    "conductorEmail": '',
    "conductorPhone": '',
    "workshopTitle": '',
    "workshopDescription": '',
    "workshopSpeakers": '',
    "fileURL": '',
    "eventStatus": 'Unreserved'
}
class AddWorkshop extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.state = initialStates;
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
        let workshop = {
            "workshopConductorName": this.state.conductorName,
            "workshopConductorEmail": this.state.conductorEmail,
            "workshopConductorPhone": this.state.conductorPhone,
            "workshopTitle": this.state.workshopTitle,
            "workshopDescription": this.state.workshopDescription,
            "workshopSpeakers": this.state.workshopSpeakers,
            "approvalStatus": 'Approval Pending',
            "downloadURL": this.state.fileURL,
            "eventStatus": this.state.eventStatus
        }
        Axios.post('http://localhost:3001/workshop/insertWorkshop', workshop)
            .then(response => {
                alert('Workshop Details Added Successfully');
                window.location = `/loggedHome/${this.state.conductorEmail}`
            }).catch(error => {
                alert('Error ', error.message);
            })

    }

    render() {

        return (
            <div>
                <Header /><br /><br /><br /><br /><br />
                <div className="add1">
                    <center><h2 class="log" style={{ color: "white" }}>Add Workshop Details</h2></center><br />
                    <form onSubmit={this.onSubmit} style={{ height: "100px;" }}>

                        <span style={{ color: "white" }}>Workshop Conductor Name</span>
                        <input
                            type="text"
                            className="form-control"
                            id="conductorName"
                            name="conductorName"
                            value={this.state.conductorName}
                            onChange={this.onChange}
                            required
                        /><br />

                        <span style={{ color: "white" }}>Workshop Conductor Email</span>
                        <input
                            type="email"
                            className="form-control"
                            id="conductorEmail"
                            name="conductorEmail"
                            value={this.state.conductorEmail}
                            onChange={this.onChange}
                            required
                        /><br />

                        <span style={{ color: "white" }}>Workshop Conductor Phone</span>
                        <input
                            type="tel"
                            pattern="[0-9]{10}"
                            className="form-control"
                            id="conductorPhone"
                            name="conductorPhone"
                            value={this.state.conductorPhone}
                            onChange={this.onChange}
                            required
                        /><br />

                        <span style={{ color: "white" }}>Workshop Title</span>
                        <input
                            type="text"
                            className="form-control"
                            id="workshopTitle"
                            name="workshopTitle"
                            value={this.state.workshopTitle}
                            onChange={this.onChange}
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

export default AddWorkshop;