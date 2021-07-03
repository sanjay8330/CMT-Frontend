import React, { Component } from 'react'
import Header from '../Header_Footer/reviewerHeader';
import '../../css/App.css';

export default class dashboard extends Component {

  render() {
    return (
      <div class="home">
        <Header />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
        <div class="text">
          <span class="glyphicon glyphicon-equalizer">DASHBOARD - REVIEWER</span>
        </div>

        <div class="sidenav1">
          <a href="/DisplayWorkshopReviewer">Manage Workshops</a>
          <a href="/DisplayResearchReviewer">Manage Research Papers</a>
        </div><br /><br />

        <br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>

    )


  }
}


