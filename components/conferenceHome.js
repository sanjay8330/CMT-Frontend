import React, { Component } from 'react'
import Header from '../components/Header_Footer/header';
import '../css/App.css';
import axios from 'axios';

export default class conferenceHome extends Component {

    //initializing the states
    constructor(props) {
        super(props);
        this.state = {
            conferences: []
        }
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

                <div class="alert">
                   <h1>You can find conference details in here....</h1>
                </div><br /><br />

                <center>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front"><br /><br />
                                <h1>CONFERENCE DETAILS</h1>
                            </div>
                            <div class="flip-card-back">
                                <table class="table border shadow">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th scope="col">TITLE</th>
                                            <th scope="col">CONFERENECE BRIEFINGS</th>
                                            <th scope="col">DATE</th>
                                            <th scope="col">TIME</th>
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
                            </div>
                        </div>
                    </div></center>
            </div>
        )
    }
}
