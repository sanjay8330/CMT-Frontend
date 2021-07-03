import React, { Component } from 'react'
import Header from '../../components/Header_Footer/loggedHeader';
import Axios from 'axios';
import '../../css/App.css';;

export default class UserWorkshop extends Component {
    constructor(props) {
        super(props);
        this.navigateToAddWorkshop = this.navigateToAddWorkshop.bind(this);
        this.state = {
            workshops: []
        }
    }

    componentDidMount() {
        //retrieving all research papers by Email ID
        Axios.get(`http://localhost:3001/workshop/readByEmail/${this.props.match.params.id}`)
            .then(response => {
                this.setState({ workshops: response.data });
            }).catch(error => {
                alert('Error', error.message);
            })
    }

    navigateToAddWorkshop(e) {
        window.location = '/addWorkshop';
    }

    render() {
        return (
            <div>
                <Header /><br /><br /><br /><br /><br />
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-primary" type="button" onClick={this.navigateToAddWorkshop}>Add Workshops</button>
                </div>

                <div className="container1"><br />

                    <center><h1>Workshops</h1></center><hr /><br />

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
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.workshops.length > 0 && this.state.workshops.map((item, index) =>
                                <tr>
                                    <td>{item.workshopConductorName}</td>
                                    <td>{item.workshopConductorEmail}</td>
                                    <td>{item.workshopConductorPhone}</td>
                                    <td>{item.workshopTitle}</td>
                                    <td>{item.workshopDescription}</td>
                                    <td>{item.workshopSpeakers}</td>
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
