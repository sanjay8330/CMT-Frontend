import React, { Component } from 'react'
import Header from '../Header_Footer/reviewerHeader';
import axios from 'axios';

import 'jspdf-autotable';
import jsPDF from 'jspdf';

export default class summary extends Component {

    //initializing the states
    constructor(props) {
        super(props);
        this.state = {
            workshops: [],
            research: []
        }
    }

    //retrieving all workshops
    componentDidMount() {
        axios.get('http://localhost:3001/workshop/readAllWorkshops/')
            .then(response => {
                this.setState({ workshops: response.data });
            })

        axios.get('http://localhost:3001/research/readAllResearch/')
            .then(response => {
                this.setState({ research: response.data });
            })
    }

    //generate workshop PDF
    jsPdfGeneratorWorkshop() {

        var doc = new jsPDF('p', 'pt');
        doc.text(210, 20, 'SAMMARY OF WORKSHOP DETAILS')

        doc.setFont('courier')

        doc.autoTable({ html: 'table' })

        //save PDF
        doc.save('workshopSummary.pdf')
    }

    //generate research PDF
    jsPdfGeneratorResearch() {

        var doc = new jsPDF('p', 'pt');
        doc.text(210, 20, 'SAMMARY OF RESEARCH PAPER DETAILS')

        doc.setFont('courier')

        doc.autoTable({ html: 'table' })

        //save PDF
        doc.save('researchSummary.pdf')
    }


    render() {
        return (
            <div>
                <Header /><br /><br /><br /><br /><br />
                <center>
                    <h1>Summary</h1><hr /><br />
                    <div class="containerR" style={{ backgroundColor: "#cee8f0" }}>
                        <div class="table-responsive">
                            <h2 class="sub-header">Summary of Workshop Details</h2><br />
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th class="col-md-1">NAME</th>
                                        <th class="col-md-3">TITLE</th>
                                        <th class="col-md-3">AMOUNT</th>
                                        <th class="col-md-4">REVIEWER STATUS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.workshops.length > 0 && this.state.workshops.map((item, index) =>
                                        <tr>
                                            <td>{item.workshopConductorName}</td>
                                            <td>{item.workshopTitle}</td>
                                            <td><b><mark style={{ color: "green" }}>Rs. {item.workshopAmount}.00</mark></b></td>
                                            <td><b><mark style={{ color: "red" }}>{item.approvalStatus}</mark></b></td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                            <center><button onClick={this.jsPdfGeneratorWorkshop} type="button" class="btn btn-primary">Download Workshop PDF</button></center>

                        </div><hr />
                        <h2 class="sub-header">Summary of Research paper Details</h2><br />
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th class="col-md-1">NAME</th>
                                        <th class="col-md-3">TITLE</th>
                                        <th class="col-md-2">AMOUNT</th>
                                        <th class="col-md-4">REVIEWER STATUS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.research.length > 0 && this.state.research.map((item, index) =>
                                        <tr>
                                            <td>{item.authorName}</td>
                                            <td>{item.researchTitle}</td>
                                            <td><b><mark style={{ color: "green" }}>Rs. {item.researchAmount}.00</mark></b></td>
                                            <td><b><mark style={{ color: "red" }}>{item.approvalStatus}</mark></b></td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <center><button onClick={this.jsPdfGeneratorResearch} type="button" class="btn btn-primary">Download Research PDF</button></center>
                        </div>
                    </div>
                    <br /><br />
                </center>


            </div>
        )
    }
}
