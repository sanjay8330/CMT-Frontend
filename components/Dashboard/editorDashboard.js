import React, { Component } from 'react'
import Header from '../Header_Footer/editorHeader';
import '../../css/App.css';

export default class dashboard extends Component {
  render() {
    return (
        <div class="home">
          <Header /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br />
          <div class="text">
            <span class="glyphicon glyphicon-equalizer">DASHBOARD - EDITOR</span>
          </div>

          <div class="sidenav">
          <a href="/viewEditorWorkshop">Manage Workshops</a>
          <a href="/viewEditorResearch">Manage Research Papers</a>
          <a href="/viewConference">Add Conferenece</a>
          </div>

          <br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br />
        </div>
        )
  }
}
