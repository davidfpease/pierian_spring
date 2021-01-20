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
import EditCardsFormContainer from './edit_cards/edit_cards_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Modal />
    <GreetingContainer />
    <Switch>
      <ProtectedRoute exact path="/dashboard" component={DashboardContainer}/>
      <ProtectedRoute exact path="/study/:deck_id" component={Study} />
      <Redirect exact from="/study/:deck_id/reload" to="/study/:deck_id" />
      <Route path="/profile" render={() => <div>Profile Content Here</div>}/>
      <ProtectedRoute path="/decks/:deck_id/cards" component={EditCardsFormContainer}/>
    </Switch>
  </div>
);

export default App;