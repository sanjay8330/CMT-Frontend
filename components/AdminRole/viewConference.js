import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header_Footer/adminHeader';
import '../../css/App.css';

export default class ViewConference extends Component {

    //initializing the states
    constructor(props) {
        super(props);
        this.navigateToConferenceUpdate = this.navigateToConferenceUpdate.bind(this);
        this.refreshPage = this.refreshPage.bind(this);
        this.state = {
            conferences: []
        }
    }

    //Navigate to the conference Update page
    navigateToConferenceUpdate(e, conferenceId) {
        window.location = `/UpdateConferenceAdmin/${conferenceId}`;
    }

    //Refresh the entire page
    refreshPage(e) {
        window.location = '/adminViewConference';
    }

    //retrieving all research
    componentDidMount() {
        axios.get('http://localhost:3001/conference/readAllConferences/')
            .then(response => {
                this.setState({ conferences: response.data.data });
            })
    }

    render() {
        return (
            <div>
                <Header /><br /><br /><br /><br />
                <div className="container1"><br />

                    <center><h1>Conference Details - ADMIN VIEW</h1></center><hr /><br />

                    <table class="table border shadow">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">CONFERENECE TITLE</th>
                                <th scope="col">CONFERENECE BRIEFINGS</th>
                                <th scope="col">CONFERENECE DATE</th>
                                <th scope="col">CONFERENECE TIME</th>
                                <th scope="col">STATUS</th>
                                <th scope="col">APPROVE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.conferences.length > 0 && this.state.conferences.map((item, index) =>
                                <tr>
                                    <td>{item.conferenceTitle}</td>
                                    <td>{item.conferenceBriefing}</td>
                                    <td>{item.conferenceDate}</td>
                                    <td>{item.conferenceTime}</td>
                                    <td>{item.adminApprovalStatus}</td>
                                    <td><a class="btn btn-success" onClick={e => this.navigateToConferenceUpdate(e, item._id)} aria-label="Edit">
                                        <i class="fa fa-edit" aria-hidden="true"></i>
                                    </a></td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div><br /><br /><br /><br /><br /><br /><br /><br />

            </div>
        )
    }
}
