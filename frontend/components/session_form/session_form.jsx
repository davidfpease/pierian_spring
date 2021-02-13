import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirm: '',
      first_name: '',
      last_name: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    //
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  demoUser(e) {
    e.preventDefault();
    const demoUser = {email: "d@d.com", password: "password"};
    this.props.login(demoUser);
  }

  renderErrors() {

    let passwordError = null;

    if((this.state.password !== this.state.confirm)
      && this.props.formType === "signup"){
        debugger;
      if (this.state.password !== this.state.confirm){
        passwordError = (
          <li key="error#999">
            Passwords do not match
          </li>
        )
      }
    }
    return (
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error#${i}`}>
            {error}
          </li>
        ))}
        {passwordError}
      </ul>
    );
  }

  render() {

    let buttonLabel;
    let allow = true;
    if (this.props.formType === "signup"){
      buttonLabel = "Register";
      Object.keys(this.state).forEach(key=>{
        if(this.state[key].trim().length === 0)
          allow = false;
      })
      if (this.state.password !== this.state.confirm){
        allow = false;
      }

    } else {
      buttonLabel = "Log In";
      if (this.state.email.trim().length === 0 || this.state.password.trim().length === 0){
        allow = false;
      }
    }

    let className;

    this.props.formType === 'signup' ? className="signup-form-container" :
      className = "login-form-container";



    return (
      <div className={className}>
        {this.props.formType === 'signup' ? (
          <div className="marketing-left">
            <div className="marketing-section anything">
              <div className="section-title">Start Learning Faster:</div>
                <ul className="marketing-items">
                  <li>Learn anything in half the time, using cognitive science</li>
                  <li>Add your own digital flashcards</li>
                  <li>Find millions of other public cards</li>
                  <li>Sync with mobile app</li>
                </ul>
            </div>
          </div>
        ) : (null)
        }
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="modal-title">
            <span>{buttonLabel}</span>            
          </div>
          <div onClick={this.props.closeModal} className="close-x">
            <img src={window.close_x} />

          </div> 
          <div className="login-form">
            <br />
            {this.props.formType === 'signup' ? (
              <div>
                <label className="input-descriptor">First Name
                  <input type="text"
                    value={this.state.first_name}
                    onChange={this.update('first_name')}
                    className="login-input"
                  />
                </label>
                <label className="input-descriptor">Last Name
                  <input type="text"
                    value={this.state.last_name}
                    onChange={this.update('last_name')}
                    className="login-input"
                  />
                </label>
              </div>
            ) : (
              <div></div>
            )}
            <label className="input-descriptor">Email
              <input type="email"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            
            <br />
            <label className="input-descriptor">Password
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br />
            {this.props.formType === 'signup' ? (
                <label className="input-descriptor">Confirm Password
                  <input type="password"
                    value={this.state.confirm}
                    onChange={this.update('confirm')}
                    className="login-input"
                  />
                </label>
              ) : (null)
            }
            {
              allow ? (
                <div className="pill-button-container">
                  <input className="session-submit pill-button" type="submit" value={buttonLabel} />
                </div>
              ) : (
                <div className="pill-button-container not-allowed">
                    <div className="session-submit pill-button not-allowed">{buttonLabel}</div>
                </div>
              )
            }
          </div>
          <div className="demo-button-container">
            <button className="demo-button" onClick={this.demoUser}>Demo User</button>
          </div>
          <div className="error-messages">
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
