import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';


//{ session, entities: { users } }

const mstp = (state) => {

  debugger;
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdtp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mstp, mdtp)(Greeting);
