import React, { Component } from 'react';
import Axios from 'axios';
import Header from '../Header_Footer/reviewerHeader';
import '../../css/App.css';

const initialStates = {
    "research": [],
    "approvalStatus": 'Approved',
    "researchAmount": '',
}
class UpdateResearch extends Component {

    //initializing the states
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialStates;
    }

    //retrieving summary of all workshops and research papers
    componentDidMount(e) {
        Axios.get(`http://localhost:3001/research/readById/${this.props.match.params.id}`)
            .then(response => {
                this.setState({ research: response.data });
                console.log('RESPONSE ', this.state.research.length);
            }).catch(error => {
                alert('Error ', error.message);
            })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        let updResearch = {
            "approvalStatus": this.state.approvalStatus,
            "researchAmount": this.state.researchAmount
        }
        Axios.put(`http://localhost:3001/research/approveOrDecline/${this.props.match.params.id}`, updResearch)
            .then(response => {
                alert('Updated Successfully');
                window.location = '/DisplayResearchReviewer';
            }).catch(error => {
                alert(error.message);
            })
    }

    render() {

        return (
            <div>
                <Header /><br /><br /><br /><br />
                    <br />
                    <div className="add5">
                        <div className="card1" style={{ backgroundColor: "#919b9e" }}>
                            {this.state.research.length > 0 && this.state.research.map((item, index) => (
                                <div key={index}>
                                    <div className="p-3">
                                        <h6>Research Paper Title        : {item.researchTitle}</h6>
                                        <h6>Research Paper Author Email : {item.authorEmail}</h6>
                                        <h6>Research Paper : <a href={item.downloadURL}><button class="downloadBtn"><i class="fa fa-download"></i> Download</button></a></h6>
                                    </div>
                                </div>
                            ))}
                        </div><br />
                        <center><h2 class="log" style={{ color: "white" }}>Update Research Paper Details</h2></center><br />
                        <form onSubmit={this.onSubmit} style={{ height: "100px;" }}>

                            <span style={{ color: "white" }}>Research Amount (Rs)</span>
                            <input
                                type="number"
                                className="form-control"
                                id="researchAmount"
                                name="researchAmount"
                                value={this.state.researchAmount}
                                onChange={this.onChange}
                                required
                            /><br />

                            <span style={{ color: "white" }}>Approval Status</span>
                            <input
                                type="text"
                                className="form-control"
                                id="approvalStatus"
                                name="approvalStatus"
                                value={this.state.approvalStatus}
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

export default UpdateResearch;