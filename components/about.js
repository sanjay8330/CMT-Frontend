import React, { Component } from 'react'
import Header from '../components/Header_Footer/header';

export default class about extends Component {
    render() {
        return (
            <div>
                <Header /><br /><br /><br /><br /><br />

                <ul class="con">
                    <li class="header">About CMT - 2021</li>
                    <li class="grey">Sri Lanka Institute of Information Technology (SLIIT)</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/><br/>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </li>

                        <li><h1>VENUE</h1>
                        <p>SLIIT Auditorium</p></li><hr/>
                        <li><h1>DATE</h1>
                        <p>10th-30th July, 2021</p></li>
                    <li class="grey"><a href="/" class="button">Back to Home</a></li>
                </ul><br />
            </div>
        )
    }
}
