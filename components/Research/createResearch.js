import React, { Component } from 'react';
import Axios from 'axios';
import Header from '../../components/Header_Footer/loggedHeader';
import firebase from '../../Firebase/firebase';

const initialStates = {
    "authorName": '',
    "authorEmail": '',
    "authorPhone": '',
    "title": '',
    "description": '',
    "approvalStatus": 'Pending Approval',
    "fileURL": '',
    "eventStatus": 'Unreserved'
}
class AddResearch extends Component {
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
    }

    onSubmit(e) {
        e.preventDefault();
        let research = {
            "authorName": this.state.authorName,
            "authorEmail": this.state.authorEmail,
            "authorContact": this.state.authorPhone,
            "researchTitle": this.state.title,
            "researchDescription": this.state.description,
            "approvalStatus": this.state.approvalStatus,
            "downloadURL": this.state.fileURL,
            "eventStatus": this.state.eventStatus
        }
        Axios.post('http://localhost:3001/research/insertResearch', research)
            .then(response => {
                alert('Research Paper Added Successfully');
                window.location = `/loggedHome/${this.state.authorEmail}`
            }).catch(error => {
                alert('Error :', error.message);
            })
    }

    render() {

        return (
            <div>
                <Header /><br /><br /><br /><br /><br />
                <div className="add3">
                    <center><h2 class="log" style={{ color: "white" }}>Add Research Paper Details</h2></center><br />
                    <form onSubmit={this.onSubmit} style={{ height: "100px" }}>

                        <span style={{ color: "white" }}>Research Paper Author Name</span>
                        <input
                            type="text"
                            className="form-control"
                            id="authorName"
                            name="authorName"
                            value={this.state.authorName}
                            onChange={this.onChange}
                            required
                        /><br />

                        <span style={{ color: "white" }}>Research Paper Author Email</span>
                        <input
                            type="email"
                            className="form-control"
                            id="authorEmail"
                            name="authorEmail"
                            value={this.state.authorEmail}
                            onChange={this.onChange}
                            required
                        /><br />

                        <span style={{ color: "white" }}>Research Paper Author Phone</span>
                        <input
                            type="tel"
                            pattern="[0-9]{10}"
                            className="form-control"
                            id="authorPhone"
                            name="authorPhone"
                            value={this.state.authorPhone}
                            onChange={this.onChange}
                            required
                        /><br />

                        <span style={{ color: "white" }}>Research Paper Title</span>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={this.state.title}
                            onChange={this.onChange}
                            required
                        /><br />

                        <span style={{ color: "white" }}>Research Paper Description</span>
                        <textarea
                            className="form-control"
                            id="description"
                            rows="3"
                            name="description"
                            value={this.state.description}
                            onChange={this.onChange}
                            required>
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

export default AddResearch;