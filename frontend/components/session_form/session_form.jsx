import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
    //debugger;
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  demoUser(e) {
    e.preventDefault();
    const demoUser = {email: "d@d.com", password: "password"};
    this.props.login(demoUser);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error#${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    let buttonLabel;
    if (this.props.formType === "signup"){
      buttonLabel = "Get Started";
    } else {
      buttonLabel = "Log In";
    }



    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="modal-title">
            <span>{buttonLabel}</span>            
          </div>
          <div onClick={this.props.closeModal} className="close-x">
            <img src={window.close_x} />

          </div> 
          {this.renderErrors()}
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
            <div className="pill-button-container">
              <input className="session-submit pill-button" type="submit" value={buttonLabel} />
            </div>
          </div>
          <div className="demo-button-container">
            <button className="demo-button" onClick={this.demoUser}>Demo User</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
