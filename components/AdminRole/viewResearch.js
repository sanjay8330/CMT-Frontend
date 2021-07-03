import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header_Footer/adminHeader';
import '../../css/App.css';

export default class ViewResearchPaper extends Component {

    //initializing the states
    constructor(props) {
        super(props);
        this.navigateToAddResearch = this.navigateToAddResearch.bind(this);
        this.navigateToNAResearch = this.navigateToNAResearch.bind(this);
        this.state = {
            approvedResearch: []
        }
    }
    //retrieving all research
    componentDidMount() {
        axios.get('http://localhost:3001/research/readAllApprovedResearch/')
            .then(response => {
                this.setState({ approvedResearch: response.data });
            }).catch(error => {
                alert('Error', error.message);
            })
    }

    navigateToAddResearch(e) {
        window.location = '/addResearch';
    }

    navigateToNAResearch(e) {
        window.location = '/getNAResearch';
    }

    render() {
        return (
            <div>
                <Header /><br /><br /><br /><br />
                <div className="container1"><br />

                    <div class="sidenavAdmin">
                        <a href="#" onClick={this.navigateToNAResearch}>View Approval Pending Research Paper</a>
                        <a href="#" onClick={this.navigateToAddResearch}>Add New Research Paper</a>
                    </div>
                    <br /><br />

                    <center><h1>Research Papers Approved BY Reviewer - ADMIN VIEW</h1></center><hr /><br />

                    <center><p><b><mark>**Note: Hi Admin, you can only view the approved research papers which are reserved/unreserved at conference***</mark></b></p></center>

                    <table class="table border shadow">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">NAME</th>
                                <th scope="col">EMAIL</th>
                                <th scope="col">PHONE</th>
                                <th scope="col">TITLE</th>
                                <th scope="col">DESCRIPTION</th>
                                <th scope="col">REVIEWER APPROVAL STATUS</th>
                                <th scope="col">EVENT STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.approvedResearch.length > 0 && this.state.approvedResearch.map((item, index) =>
                                <tr>
                                    <td>{item.authorName}</td>
                                    <td>{item.authorEmail}</td>
                                    <td>{item.authorContact}</td>
                                    <td>{item.researchTitle}</td>
                                    <td>{item.researchDescription}</td>
                                    <td>{item.approvalStatus}</td>
                                    <td>{item.eventStatus}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div><br /><br /><br /><br /><br /><br /><br /><br />

            </div>
        )
    }
}
