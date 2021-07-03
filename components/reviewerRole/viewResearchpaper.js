import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header_Footer/reviewerHeader';
import '../../css/App.css';

export default class researchPaper extends Component {

    //initializing the states
    constructor(props) {
        super(props);
        this.navigateToResearchUpdate = this.navigateToResearchUpdate.bind(this);
        this.state = {
            research: []
        }
    }

    //retrieving all research
    componentDidMount() {
        axios.get('http://localhost:3001/research/readAllResearch/')
            .then(response => {
                this.setState({ research: response.data });
            })
    }

    //delete() method
    delete(researchId) {
        axios.get('http://localhost:3001/research/deleteById/' + researchId)
            .then(response => {
                alert("Are you sure you want to delete this Research Paper?");
                this.componentDidMount();
            });
    }

    //Navigating to the updating page
    navigateToResearchUpdate(e, researchID) {
        window.location = `/UpdateResearchReviewer/${researchID}`;
    }

    render() {
        return (
            <div>
                <Header /><br /><br /><br /><br />
                <div className="container1"><br />
                    <center><h1>Research Papers - REVIEWER VIEW</h1></center><hr /><br />
                    <center><p><b><mark>*** Note: Hi Reviewer, you can approve or decline Research Paper details in here ***</mark></b></p></center>
                    <table class="table border shadow">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">AUTHORNAME</th>
                                <th scope="col">EMAIL</th>
                                <th scope="col">PHONE</th>
                                <th scope="col">TITLE</th>
                                <th scope="col">DESCRIPTION</th>
                                <th scope="col">AMOUNT</th>
                                <th scope="col">STATUS</th>
                                <th scope="col">APPROVE</th>
                                <th scope="col">DECLINE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.research.length > 0 && this.state.research.map((item, index) =>
                                <tr>
                                    <td>{item.authorName}</td>
                                    <td>{item.authorEmail}</td>
                                    <td>{item.authorContact}</td>
                                    <td>{item.researchTitle}</td>
                                    <td>{item.researchDescription}</td>
                                    <td>Rs. {item.researchAmount}</td>
                                    <td>{item.approvalStatus}</td>
                                    <td><a class="btn btn-success" onClick={e => this.navigateToResearchUpdate(e, item._id)} aria-label="Edit">
                                        <i class="fa fa-edit" aria-hidden="true"></i>
                                    </a></td>
                                    <td>
                                        <a class="btn btn-danger" onClick={() => this.delete(item._id)} href="mailto:?Subject=Your workshop post has been Declined" aria-label="Delete"><i class="fa fa-trash" aria-hidden="true"></i>
                                        </a>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div><br />

            </div>
        )
    }
}
