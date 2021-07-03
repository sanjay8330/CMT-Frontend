import React, { Component } from 'react';
import Axios from 'axios';
import Header from '../Header_Footer/editorHeader';

const initialState = {
    "title": '',
    "description": '',
    "date": '',
    "time": ''
}

export default class AddConference extends Component {
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
        let conference = {
            "conferenceTitle": this.state.title,
            "conferenceBriefing": this.state.description,
            "conferenceDate": this.state.date,
            "conferenceTime": this.state.time
        }
        Axios.post('http://localhost:3001/conference/insertConference', conference)
            .then(response => {
                alert('Conference Details added Successfully');
            }).catch(error => {
                alert('Error ', error.message);
            })

    }

    render() {
        return (
            <div>
                <Header /><br /><br /><br /><br /><br />
                <div className="add8">
                    <center><h2 class="log" style={{ color: "white" }}>Add Conference Details</h2></center><br />
                    <form onSubmit={this.onSubmit} style={{ height: "100px;" }}>

                        <span style={{ color: "white" }}>Conference Title</span>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={this.state.title}
                            onChange={this.onChange}
                            required
                        /><br />

                        <span style={{ color: "white" }}>Conference Briefings</span>
                        <textarea
                            className="form-control"
                            id="description"
                            rows="3"
                            name="description"
                            value={this.state.description}
                            onChange={this.onChange}
                            required>
                        </textarea><br />

                        <span style={{ color: "white" }}>Conference Date</span>
                        <input
                            type="date"
                            className="form-control"
                            id="date"
                            name="date"
                            value={this.state.date}
                            onChange={this.onChange}
                            required
                        /><br />

                        <span style={{ color: "white" }}>Conference Time</span>
                        <input
                            type="text"
                            className="form-control"
                            id="time"
                            name="time"
                            value={this.state.time}
                            onChange={this.onChange}
                            required
                        /><br />

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div><br />
            </div>

        )
    }
}