import React, { Component } from 'react'
import Header from '../Header_Footer/adminHeader';
import '../../css/App.css';

export default class dashboard extends Component {
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
      <div class="home">
        <Header /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <div class="text">
          <span class="glyphicon glyphicon-equalizer">DASHBOARD - ADMIN</span>
        </div>
      
        <div class="sidenav">
          <a href="#" onClick={this.navigateToUserAdd}>User Management</a>
          <a href="#" onClick={this.navigateToWorkshop}>Manage Workshops</a>
          <a href="#" onClick={this.navigateToResearch}>Manage Research Papers</a>
        </div>

        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br />
      </div>

    )
  }
}
