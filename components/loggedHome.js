import React, { Component } from 'react'
import Header from '../components/Header_Footer/loggedHeader';
import '../css/App.css';

export default class LoggedHome extends Component {
  constructor(props) {
    super(props);
    this.navigateToViewResearch = this.navigateToViewResearch.bind(this);
    this.navigateToViewWorkshop = this.navigateToViewWorkshop.bind(this);
    this.state = {
      researches: []
    }
  }

  navigateToViewResearch(e) {
    window.location = `/viewUserResearch/${this.props.match.params.id}`;
  }

  navigateToViewWorkshop(e) {
    window.location = `/viewUserWorkshop/${this.props.match.params.id}`;
  }

  render() {
    return (
      <div>
        <Header /><br /><br /><br /><br />

        <div class="alert">
        <center><h1>CMT - HOME</h1></center>
        </div><br />

        <center>
          <div class="d-grid gap-2 col-12 mx-auto">
            <div class="row1">
              <button class="Homebtn1" onClick={this.navigateToViewResearch}>
                <img class="Signimg1" />
                <center><br /><p class="Signtxt">Research Papers</p></center>
              </button>

              <button class="Homebtn2" onClick={this.navigateToViewWorkshop}>
                <img class="Signimg2" />
                <center><br /><p class="Signtxt">Workshops</p></center>
              </button>

              <button class="Homebtn3">
                <img class="Signimg3" />
                <center><br /><p class="Signtxt">Make Payments</p></center>
              </button>
            </div>

          </div></center>

        <br /><br />
      </div>
    )
  }
}
