import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header_Footer/editorHeader';
import '../../css/App.css';

export default class ViewConference extends Component {

    //initializing the states
    constructor(props) {
        super(props);
        this.navigateToAddConference = this.navigateToAddConference.bind(this);
        this.state = {
            conferences: []
        }
    }
    //retrieving all research
    componentDidMount() {
        axios.get('https://conference-tool-app.herokuapp.com/conference/readAllConferences')
            .then(response => {
                this.setState({ conferences: response.data.data });
            }).catch(error => {
                alert('Error', error.message);
            })
    }

    navigateToAddConference(e) {
        window.location = '/addConference';
    }

    render() {
        return (
            <div>
                <Header /><br /><br /><br /><br />
                <div className="container1"><br />

                    <div class="sidenavEditor">
                        <a href="#" onClick={this.navigateToAddConference}>Add New Conference</a>
                    </div>
                    <br />

                    <center><h1>Conference Details - EDITOR VIEW</h1></center><hr /><br />

                    <table class="table border shadow">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">CONFERENECE TITLE</th>
                                <th scope="col">CONFERENECE BRIEFINGS</th>
                                <th scope="col">CONFERENECE DATE</th>
                                <th scope="col">CONFERENECE TIME</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.conferences.length > 0 && this.state.conferences.map((item, index) =>
                                <tr>
                                    <td>{item.conferenceTitle}</td>
                                    <td>{item.conferenceBriefing}</td>
                                    <td>{item.conferenceDate}</td>
                                    <td>{item.conferenceTime}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div><br /><br /><br /><br /><br /><br /><br /><br />

            </div>
        )
    }
}
