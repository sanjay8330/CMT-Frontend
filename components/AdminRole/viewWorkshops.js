import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header_Footer/adminHeader';
import '../../css/App.css';

export default class ViewWorkshop extends Component {

    //initializing the states
    constructor(props) {
        super(props);
        this.navigateToAddWorkshop = this.navigateToAddWorkshop.bind(this);
        this.navigateToNAWorkshop = this.navigateToNAWorkshop.bind(this);
        this.state = {
            approvedWorkshops: []
        }
    }
    //retrieving all workshops
    componentDidMount() {
        axios.get('http://localhost:3001/workshop/readAllApprovedWorkshops/')
            .then(response => {
                this.setState({ approvedWorkshops: response.data });
            }).catch(error => {
                alert('Error ', error.message);
            })
    }

    //Navigating to the add workshop page
    navigateToAddWorkshop(e) {
        window.location = '/addWorkshop';
    }

    navigateToNAWorkshop(e) {
        window.location = '/getNAWorkshop';
    }

    render() {
        return (
            <div>
                <Header /><br /><br /><br />
                <div className="container1">

                    <div class="sidenavAdmin">
                        <a href="#" onClick={this.navigateToNAWorkshop}>Workshops waiting for Reviewer Approval</a>
                        <a href="#"  onClick={this.navigateToAddWorkshop}>Add New Workshops</a>
                    </div><br /><br /><br /><br />

                    <center><h1>Workshop Details approved by Reviewer - ADMIN VIEW</h1></center><hr /><br />

                    <center><p><b><mark>**Note: Hi Admin, you can only view the approved workshops which are reserved/unreserved at conference***</mark></b></p></center>

                    <table class="table border shadow">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">NAME</th>
                                <th scope="col">EMAIL</th>
                                <th scope="col">PHONE</th>
                                <th scope="col">TITLE</th>
                                <th scope="col">DESCRIPTION</th>
                                <th scope="col">SPEAKERS</th>
                                <th scope="col">REVIEWER APPROVAL STATUS</th>
                                <th scope="col">EVENT STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.approvedWorkshops.length > 0 && this.state.approvedWorkshops.map((item, index) =>
                                <tr>
                                    <td>{item.workshopConductorName}</td>
                                    <td>{item.workshopConductorEmail}</td>
                                    <td>{item.workshopConductorPhone}</td>
                                    <td>{item.workshopTitle}</td>
                                    <td>{item.workshopDescription}</td>
                                    <td>{item.workshopSpeakers}</td>
                                    <td>{item.approvalStatus}</td>
                                    <td>{item.eventStatus}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div><br /><br /><br />

            </div>
        )
    }
}
