import React, { Component } from 'react'
import Header from '../../components/Header_Footer/loggedHeader';
import Axios from 'axios';
import '../../css/App.css';;

export default class UserResearch extends Component {
    constructor(props) {
        super(props);
        this.navigateToAddResearch = this.navigateToAddResearch.bind(this);
        this.state = {
            researches: []
        }
    }

    componentDidMount() {
        //retrieving all research papers by Email ID
        Axios.get(`http://localhost:3001/research/readByEmail/${this.props.match.params.id}`)
            .then(response => {
                this.setState({ researches: response.data });
            }).catch(error => {
                alert('Error', error.message);
            })
    }

    navigateToAddResearch(e) {
        window.location = '/addResearch';
    }

    render() {
        return (
            <div>
                <Header /><br /><br /><br /><br /><br />
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-primary" type="button" onClick={this.navigateToAddResearch}>Add Research Paper</button>
                </div>

                <div className="container1"><br />

                    <center><h1>Research Papers</h1></center><hr /><br />

                    <table class="table border shadow">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">NAME</th>
                                <th scope="col">EMAIL</th>
                                <th scope="col">PHONE</th>
                                <th scope="col">TITLE</th>
                                <th scope="col">DESCRIPTION</th>
                                <th scope="col">REVIEWER APPROVAL STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.researches.length > 0 && this.state.researches.map((item, index) =>
                                <tr>
                                    <td>{item.authorName}</td>
                                    <td>{item.authorEmail}</td>
                                    <td>{item.authorContact}</td>
                                    <td>{item.researchTitle}</td>
                                    <td>{item.researchDescription}</td>
                                    <td>{item.approvalStatus}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div><br /><br /><br /><br /><br /><br /><br /><br />

            </div>
        )
    }
}
