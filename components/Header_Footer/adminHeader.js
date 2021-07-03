import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
        this.navigateToUserAdd = this.navigateToUserAdd.bind(this);
        this.navigateToWorkshop = this.navigateToWorkshop.bind(this);
        this.navigateToResearch = this.navigateToResearch.bind(this);
      }
    
      navigateToUserAdd(e) {
        window.location = '/addUser';
      }
    
      navigateToWorkshop(e) {
        window.location = '/adminWorkshops';
      }
    
      navigateToResearch(e) {
        window.location = '/adminResearches';
      }


    render() {
        return (
            <div>
                <header id="header" class="d-flex align-items-center ">
                    <div class="container-fluid container-xxl d-flex align-items-center">

                        <div id="logo" class="me-auto">
                            <h1><a href="index.html">CMT-<span>2021</span></a></h1>
                        </div>
                        <nav id="navbar" class="navbar order-last order-lg-0">
                            <ul>
                                <li><a class="nav-link scrollto active" href="/dashboard">ADMIN</a></li>
                                <li><a class="nav-link scrollto" href="#" onClick={this.navigateToWorkshop}>Workshop</a></li>
                                <li><a class="nav-link scrollto" href="#" onClick={this.navigateToResearch}>Research Papers</a></li>
                                <li><a class="nav-link scrollto" href="/adminViewConference">Conference</a></li>
                                <li><a class="nav-link scrollto" href="/#">Research Paper Author Payments</a></li>
                                <li><a class="nav-link scrollto" href="/#">Attendee Payments</a></li>
                                <li><a class="nav-link scrollto" href="/checkEvents">Conference Events</a></li>
                                <li><a class="nav-link scrollto" href="#" onClick={this.navigateToUserAdd}>Users</a></li>
                                <li><a class="nav-link scrollto" href="/">Logout</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        )
    }

}

export default Header;