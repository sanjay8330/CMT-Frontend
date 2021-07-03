import React, { Component } from 'react';
import Axios from 'axios';
import Header from '../Header_Footer/editorHeader';
import '../../css/App.css';
import Select from 'react-select';

const initialStates = {
    "conferenceID": '',
    "researchID": '',
    "allocatedTime": '',
    "adminApprovalStatus": 'Pending Approval',
    "conferenceList": [],
    "conferenceOption": [],
    "selectedConference": '',
    "eventStatus": 'Reserved'
}
export default class AddConferenceResearch extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSelected = this.onSelected.bind(this);
        this.state = initialStates;
    }

    //Get all available conference names - but pass the ID
    componentDidMount(e) {
        Axios.get('https://conference-tool-app.herokuapp.com/conference/readAllConferences')
            .then(response => {
                this.setState({ conferenceList: response.data.data }, () => {
                    let data = [];
                    this.state.conferenceList.map((item, key) => {
                        let conference = {
                            value: item._id,
                            label: item.conferenceTitle
                        }
                        data.push(conference);
                    });
                    this.setState({ conferenceOption: data });
                });
            })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        let conferenceResearch = {
            "conference": this.state.selectedConference,
            "researches": this.props.match.params.id,
            "allocatedTime": this.state.allocatedTime,
            "adminApprovalStatus": this.state.adminApprovalStatus
        }
        Axios.post('https://conference-tool-app.herokuapp.com/conferenceResearchs/insertConferenceResearches', conferenceResearch)
        .then(response => {
            let updResearch = {
                "eventStatus": this.state.eventStatus
            }
            Axios.put(`https://conference-tool-app.herokuapp.com/research/changeEventStatus/${this.props.match.params.id}`, updResearch)
            .then(response => {
                alert('Research Added to conference & Updated');
                window.location = "/viewEditorResearch";
            }).catch(error => {
                alert('Something went wrong!!!');
            })
        }).catch(error => {
            alert('Error ',error.message);
        })
    }

    onSelected(e){
        this.setState( { selectedConference: e.value });
    }

    render() {

        return (
            <div>
                <Header /><br /><br /><br /><br />
                <br />
                <div className="add5">
                    <center><h2 class="log" style={{ color: "white" }}>Add Research Paper To Conference</h2></center><br />
                    <form onSubmit={this.onSubmit} style={{ height: "100px;" }}>

                        <label htmlFor="conference" className="form-label" style={{ color: "white" }}>Select Conference</label>
                        <Select
                            options={this.state.conferenceOption}
                            onChange={this.onSelected}
                        /><br />

                        <span style={{ color: "white" }}>Allocated Time at Conference</span>
                        <input
                            type="test"
                            className="form-control"
                            id="allocatedTime"
                            name="allocatedTime"
                            value={this.state.allocatedTime}
                            onChange={this.onChange}
                            required
                        /><br />

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div><br />
            </div>
        )
    }
}
