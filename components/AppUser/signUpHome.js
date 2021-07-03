import React, { Component } from 'react';
import Header from '../../components/Header_Footer/header';
import '../../css/App.css';

export default class SignUpHome extends Component {
    constructor(props) {
        super(props);
        this.navigateToUserWorkshopAdd = this.navigateToUserWorkshopAdd.bind(this);
    }

    navigateToUserWorkshopAdd(e) {
        window.location = '/addUserWorkshop';
    }

    navigateToUserResearchAdd(e) {
        window.location = '/addUserResearch';
    }

    render() {
        return (
            <div>
                <Header /><br /><br /><br /><br /><br />
                <center><h1>SIGN UP</h1></center><hr /><br /><br /><br />

                <center>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <div class = "row1">
                    <button class="Signbtn" onClick={this.navigateToUserWorkshopAdd}>
                        <img class="Signimg" /> 
                        <center><br /><p class="Signtxt">Sign Up to add Workshop</p></center>
                    </button>

                    <button class="Signbtn" onClick={this.navigateToUserResearchAdd}>
                        <img class="Signimg"/>
                        <center><br /><p class="Signtxt">Sign Up to add Research Paper</p></center>
                    </button>
                    </div> 

                </div></center><br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}