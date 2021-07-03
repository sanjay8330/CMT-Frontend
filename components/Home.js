import React, { Component } from 'react'
import Header from '../components/Header_Footer/header';
import '../css/App.css';

export default class home extends Component {
  render() {
    return (
      <div class="home">
        <Header /><br /><br /><br /><br /><br /><br /><br />
        <div class="text">
          <span class="glyphicon glyphicon-equalizer">CMT - 2021</span>
          <h1>Sri Lanka Institute of Information Technology (SLIIT) <br />Conference</h1><hr />
          <h5>- Virtual Conferenece -</h5>
          <p><mark>July 10 - July 30, 2021</mark></p><br />

          <center>
            <div class="about">
              <a href="/about"><button class="btn">ABOUT</button></a>
            </div>
          </center>
        </div><br />

        <br /><br /><br /><br /><br />
      </div>
    )
  }
}
