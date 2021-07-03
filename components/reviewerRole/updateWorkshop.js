import React, { Component } from 'react';
import Axios from 'axios';
import Header from '../Header_Footer/reviewerHeader';
import '../../css/App.css';

const initialStates = {
    "workshop": [],
    "approvalStatus": 'Approved',
    "workshopAmount": '',
}

class UpdateWorkshop extends Component {

     //initializing the states
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = initialStates;
    }

    componentDidMount(e) {
        Axios.get(`http://localhost:3001/workshop/readById/${this.props.match.params.id}`)
            .then(response => {
                this.setState({ workshop: response.data });
                console.log('RESPONSE ', this.state.workshop.length);
            }).catch(error => {
                alert('Error ', error.message);
            })
    }

    onSubmit(e) {
        e.preventDefault();
        let updWorkshop = {
            "approvalStatus": this.state.approvalStatus,
            "workshopAmount": this.state.workshopAmount
        }
        Axios.put(`http://localhost:3001/workshop/approveOrDecline/${this.props.match.params.id}`, updWorkshop)
            .then(response => {
                alert('Updated Successfully');
                window.location = '/DisplayWorkshopReviewer';
            }).catch(error => {
                alert(error.message);
            })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {

        return (
            <div>
                <Header /><br /><br /><br /><br /><br />

                <div className="update">
                    <div className="card" style={{ backgroundColor: "#919b9e" }}>
                        {this.state.workshop.length > 0 && this.state.workshop.map((item, index) => (
                            <div key={index}>
                                <div className="p-3">
                                    <h6>Workshop Title           : {item.workshopTitle}</h6>
                                    <h6>Workshop Conductor Email : {item.workshopConductorEmail}</h6>
                                    <h6>Workshop Flyer : <a href={item.downloadURL}><button class="downloadBtn"><i class="fa fa-download"></i> Download</button></a></h6>
                                    {/* <b><i><u><a href={item.downloadURL} style = {{color: "#751605"}}>Download Workshop Flyer</a></u></i></b> */}
                                </div>
                            </div>
                        ))}
                    </div><br />
                    <center><h2 class="log" style={{ color: "white" }}>Update Workshop Details</h2></center><br />
                    <form onSubmit={this.onSubmit} style={{ height: "100px;" }}>

                        <span style={{ color: "white" }}>Workshop Amount (Rs)</span>
                        <input
                            type="number"
                            className="form-control"
                            id="workshopAmount"
                            name="workshopAmount"
                            value={this.state.workshopAmount}
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

export default UpdateWorkshop;