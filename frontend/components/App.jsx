import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Modal from './modal/modal';
import GreetingContainer from "./greeting/greeting_container";
import DashboardContainer from './dashboard/dashboard_container';
import Study from './study/study';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Modal />
        <GreetingContainer />
    <Switch>
      <Route path="/dashboard" component={DashboardContainer}/>
      <Route path="/study/:deck_id" component={Study} />
      <Route path="/profile" render={() => <div>hi</div>}/>
      {/*
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      */}
    </Switch>
  </div>
);

export default App;