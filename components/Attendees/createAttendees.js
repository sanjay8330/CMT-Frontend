import React, { Component } from 'react';
import Header from '../../components/Header_Footer/loggedHeader';
import Axios from 'axios';

const initialState = {
    "name": '',
    "email": '',
    "phone": '',
    "events": [],
    "payDate": '',
    "payAmount": '',
    "accountNo": '',
}

class AddAttendees extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        let attendee = {
            "attendeeName": this.state.name,
            "attendeeEmail": this.state.email,
            "attendeeContact": this.state.phone,
            "paymentDate": this.state.payDate,
            "paymentAmount": this.state.payAmount,
            "paymentAccountNo": this.state.accountNo
        }
        Axios.post('http://localhost:3001/attendee/insertAttendee', attendee)
            .then(response => {
                alert('Data added Successfully!');
            }).catch(error => {
                alert('Error ', error.message);
            })
    }

    render() {

        return (
            <div>
                <Header /><br /><br /><br /><br /><br />
                <div className="add2">
                    <center><h2 class="log" style={{ color: "white" }}>Add Attendee Details</h2></center><br />
                    <form onSubmit={this.onSubmit} style={{ height: "100px;" }}>

                        <span style={{ color: "white" }}>Full Name</span>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                        /><br />

                        <span style={{ color: "white" }}>Email Address</span>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                        /><br />

                        <span style={{ color: "white" }}>Phone Number</span>
                        <input
                            type="tel"
                            pattern="[0-9]{10}"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.onChange}
                        /><br />

                        <span style={{ color: "white" }}>Payment Date</span>
                        <input
                            type="date"
                            className="form-control"
                            id="payDate"
                            name="payDate"
                            value={this.state.payDate}
                            onChange={this.onChange}
                        /><br />

                        <span style={{ color: "white" }}>Payment Amount</span>
                        <input
                            type="text"
                            className="form-control"
                            id="payAmount"
                            name="payAmount"
                            value={this.state.payAmount}
                            onChange={this.onChange}
                        /><br />

                        <span style={{ color: "white" }}>Bank Account Number</span>
                        <input
                            type="text"
                            className="form-control"
                            id="accountNo"
                            name="accountNo"
                            value={this.state.accountNo}
                            onChange={this.onChange}
                        /><br />

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div><br />
            </div>
        )
    }

}

export default AddAttendees;