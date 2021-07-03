import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
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
                                <li><a class="nav-link scrollto active" href="//DisplayWorkshopReviewer">REVIEWER</a></li>
                                <li><a class="nav-link scrollto" href="/DisplayWorkshopReviewer">View Workshop</a></li>
                                <li><a class="nav-link scrollto" href="/DisplayResearchReviewer">View Research Papers</a></li>
                                <li><a class="nav-link scrollto" href="/summary">Summary</a></li>
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