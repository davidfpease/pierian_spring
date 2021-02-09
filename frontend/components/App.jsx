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
import Profile from './profile/profile';
import EditCardsFormContainer from './edit_cards/edit_cards_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NoMatch from '../util/no_match.jsx';

const App = () => (
  <div>
    <Modal />
    
    <Switch>
      <AuthRoute exact path="/" component={ GreetingContainer }/>
      <AuthRoute exact path="/login" component={ GreetingContainer }/>
      <AuthRoute exact path="/signup" component={ GreetingContainer }/>
      <ProtectedRoute exact path="/dashboard" component={DashboardContainer}/>
      <ProtectedRoute exact path="/study/:deck_id" component={Study} />
      <Redirect exact from="/study/:deck_id/reload" to="/study/:deck_id" />
      <ProtectedRoute path="/profile" component={Profile}/>
      <ProtectedRoute path="/decks/:deck_id/cards" component={EditCardsFormContainer}/>
      <Route path="*" component={ NoMatch }/>
    </Switch>
  </div>
);

export default App;