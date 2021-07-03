import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './components/Header_Footer/Footer';
import Home from './components/Home';

import AddWorkshop from './components/Workshops/createWorkshop';
import AddAttendees from './components/Attendees/createAttendees';
import AddUser from './components/AppUser/createUser';
import AddGeneralUser from './components/AppUser/createGeneralUser';
import SignUpHome from './components/AppUser/signUpHome';
import UserPlusWorkshop from './components/AppUser/createUserWorkshop';
import UserPlusResearch from './components/AppUser/createUserResearch';
import UserLogin from './components/Login/userLogin';
import ViewWorkshop from './components/AdminRole/viewWorkshops';
import ViewResearchPaper from './components/AdminRole/viewResearch';
import AddResearch from './components/Research/createResearch';
import loggedHome from './components/loggedHome';
import UnApprovedResearch from './components/AdminRole/viewResearchNA';
import UnApprovedWorkshop from './components/AdminRole/viewWorkshopNA';
import conferenceTime from './components/EditorRole/createConference';
import ViewConference from './components/EditorRole/viewConferences';
import ViewResearchEditor from './components/EditorRole/viewResearch';
import ViewWorkshopEditor from './components/EditorRole/viewWorkshop';
import AddConferenceResearch from './components/EditorRole/addConferenceResearch';
import UserResearch from './components/AppUser/viewUserResearch';
import UserWorkshop from './components/AppUser/viewUserWorkshop';
import about from './components/about';
import AddConferenceWorkshop from './components/EditorRole/addConferenceWorkshop';
import adminViewConference from './components/AdminRole/viewConference';
import UpdateConference from './components/AdminRole/updateConference';
import conferenceHome from './components/conferenceHome';
import CheckConference from './components/Conferences/checkConferenceEvents';

//Dashboard types
import AdminDashboard from './components/Dashboard/adminDashboard';
import reviewerDashboard from './components/Dashboard/reviewerDashboard';
import editorDashboard from './components/Dashboard/editorDashboard';

//reviewer Role
import viewWorkshopReviewer from './components/reviewerRole/viewWorkshop';
import DisplayResearchReviewer from './components/reviewerRole/viewResearchpaper';
import updateWorkshopReviewer from './components/reviewerRole/updateWorkshop';
import updateResearchReviewer from './components/reviewerRole/updateResearch';
import summary from './components/reviewerRole/summary';

//The main file for App render
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        return (
            <div>
                <Router>
                    <section>
                        <Switch>
                            <Route path="/" component={Home} exact />
                            <Route path="/addWorkshop" component={AddWorkshop}></Route>
                            <Route path="/addAttendee" component={AddAttendees}></Route>
                            <Route path="/generalUserSignUp" component={ AddGeneralUser }></Route>
                            <Route path="/login" component={ UserLogin }></Route>
                            <Route path="/addUser" component={ AddUser }></Route>
                            <Route path="/signUpHome" component={ SignUpHome }></Route>
                            <Route path="/addUserWorkshop" component={ UserPlusWorkshop }></Route>
                            <Route path="/addUserResearch" component={ UserPlusResearch }></Route>
                            <Route path="/adminWorkshops" component={ ViewWorkshop }></Route>
                            <Route path="/adminResearches" component={ ViewResearchPaper }></Route>
                            <Route path="/addResearch" component={AddResearch}></Route>
                            <Route path="/loggedHome/:id" component={loggedHome}></Route>
                            <Route path="/getNAResearch" component={ UnApprovedResearch }></Route>
                            <Route path="/getNAWorkshop" component={ UnApprovedWorkshop }></Route>
                            <Route path="/addConference" component={ conferenceTime }></Route>
                            <Route path="/viewConference" component={ ViewConference }></Route>
                            <Route path="/viewEditorResearch" component={ ViewResearchEditor }></Route>
                            <Route path="/viewEditorWorkshop" component={ ViewWorkshopEditor }></Route>
                            <Route path="/conferenceResearch/:id" component={ AddConferenceResearch }></Route>
                            <Route path="/viewUserResearch/:id" component={ UserResearch }></Route>
                            <Route path="/viewUserWorkshop/:id" component={ UserWorkshop }></Route>
                            <Route path="/about" component={ about }></Route>
                            <Route path="/conferenceWorkshop/:id" component={ AddConferenceWorkshop }></Route>
                            <Route path="/adminViewConference" component={ adminViewConference }></Route>
                            <Route path="/UpdateConferenceAdmin/:id" component={UpdateConference}></Route>
                            <Route path="/conferenceHome" component={conferenceHome}></Route>
                            <Route path="/checkEvents" component={ CheckConference }></Route>
                            
                            <Route path="/adminDashboard" component={AdminDashboard}></Route>
                            <Route path="/reviewerDashboard" component={reviewerDashboard}></Route>
                            <Route path="/editorDashboard" component={editorDashboard}></Route>

                            <Route path="/DisplayWorkshopReviewer" component={viewWorkshopReviewer}></Route>
                            <Route path="/DisplayResearchReviewer" component={DisplayResearchReviewer}></Route>
                            <Route path="/UpdateWorkshopReviewer/:id" component={updateWorkshopReviewer}></Route>
                            <Route path="/UpdateResearchReviewer/:id" component={updateResearchReviewer}></Route>
                            <Route path="/summary" component={summary}></Route>
                        </Switch>
                    </section>
                    <Footer />
                </Router>
            </div>
        )
    }
}
