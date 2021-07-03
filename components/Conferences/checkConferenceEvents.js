import React, { Component } from 'react';
import Select from 'react-select';
import Axios from 'axios';

const initalStates = {
    "conferenceList": [],
    "conferenceOptions": [],
    "selectedconference": ''
}

export default class CheckConference extends Component {
    constructor(props) {
        super(props);
        this.onSelected = this.onSelected.bind(this);
        this.navigateToViewEvents = this.navigateToViewEvents.bind(this);
        this.state = initalStates;
    }

    onSelected(e){
        this.setState( { selectedconference: e.value });
    }

    navigateToViewEvents(e){
        window.location = `/conferenceEvents/${this.state.selectedconference}`;
    }

    componentDidMount() {
        Axios.get('http://localhost:3001/conference/readAllConferences')
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
                    this.setState({ conferenceOptions: data });
                });
            })
    }

    render() {
        return (
            <div className="container">
                <label htmlFor="conferenceList" className="form-label">Select Conference</label>
                <Select
                    options={this.state.conferenceOptions}
                    onChange={this.onSelected}
                /><br />

                <button type="submit" className="btn btn-primary" onClick={this.navigateToViewEvents}>View Events</button>
            </div>
        )
    }

}