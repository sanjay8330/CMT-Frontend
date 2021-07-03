import React, { Component } from 'react';
import Axios from 'axios';
import Header from '../Header_Footer/adminHeader';
import '../../css/App.css';

const initialStates = {
    "conference": [],
    "adminApprovalStatus": 'Approved'
}

class UpdateConference extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = initialStates;
    }

    componentDidMount(e) {
        Axios.get(`http://localhost:3001/conference/readById/${this.props.match.params.id}`)
            .then(response => {
                this.setState({ conference: response.data });
                console.log('RESPONSE ', this.state.conference.length);
            }).catch(error => {
                alert('Error ', error.message);
            })
    }

    onSubmit(e) {
        e.preventDefault();
        let updConference = {
            "adminApprovalStatus": this.state.adminApprovalStatus
        }
        Axios.put(`http://localhost:3001/conference/approveOrDecline/${this.props.match.params.id}`, updConference)
            .then(response => {
                alert('Updated Successfully');
            }).catch(error => {
                alert(error.message);
            })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        return (
            <div>
                <Header /><br /><br /><br /><br /><br />

                <div className="update1">
                    <center><h2 class="log" style={{ color: "white" }}>Update Conference Details</h2></center><br />
                    <form onSubmit={this.onSubmit} style={{ height: "100px;" }}>

                        <span style={{ color: "white" }}>Approval Status</span>
                        <input
                            type="text"
                            className="form-control"
                            id="adminApprovalStatus"
                            name="adminApprovalStatus"
                            value={this.state.adminApprovalStatus}
                            required
                            readOnly
                        /><br />

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div><br />
            </div>
        )
    }
}

export default UpdateConference;