import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header_Footer/editorHeader';
import '../../css/App.css';

export default class ViewResearchEditor extends Component {

    //initializing the states
    constructor(props) {
        super(props);
        this.navigateConferenceResearchPage = this.navigateConferenceResearchPage.bind(this);
        this.state = {
            approvedResearch: []
        }
    }
    //retrieving all research
    componentDidMount() {
        axios.get('http://localhost:3001/research/readAllApprovedUnreserved/')
            .then(response => {
                this.setState({ approvedResearch: response.data });
            }).catch(error => {
                alert('Error', error.message);
            })
    }

    //Navigating to editor adding research paper to conference
    navigateConferenceResearchPage(e, researchId){
        window.location = `/conferenceResearch/${researchId}`
    }

    render() {
        return (
            <div>
                <Header /><br /><br /><br /><br />
                <div className="container1"><br />

                    <center><h1>Research Papers Approved By Reviewer - EDITOR VIEW</h1></center><hr /><br />
                    <center><p><b><mark>**Note: Hi Editor, you can only view the approved research paper but which are not yet added to the conference here***</mark></b></p></center>

                    <table class="table border shadow">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">NAME</th>
                                <th scope="col">EMAIL</th>
                                <th scope="col">PHONE</th>
                                <th scope="col">TITLE</th>
                                <th scope="col">DESCRIPTION</th>
                                <th scope="col">REVIEWER APPROVAL STATUS</th>
                                <th scope="col">ACTION</th>
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
                                    <td>
                                        <button type="button" class="btn btn-primary" onClick={e => this.navigateConferenceResearchPage(e, item._id)}>Add to conference</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table> 

                </div><br /><br /><br /><br /><br /><br /><br /><br />

            </div>
        )
    }
}
