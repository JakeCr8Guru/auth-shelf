import React, { Component } from 'react';
import { connect } from 'react-redux';
import "nes.css/css/nes.min.css";
class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div class="nes-container with-title is-centered">
        {this.props.errors.loginMessage && (
          <h2 className="alert" role="alert">
            {this.props.errors.loginMessage}
          </h2>
        )}
        <div>
          <form
            class="nes-container with-title is-centered "
            onSubmit={this.login}
          >
            <h1>Login</h1>
            <div>
              <label htmlFor="username">
                Username:
                <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChangeFor("username")}
                />
              </label>
            </div>
            <div>
              <label htmlFor="password">
                Password:
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChangeFor("password")}
                />
              </label>
            </div>
            <div>
              <input
                className="nes-btn is-primary"
                type="submit"
                name="submit"
                value="Log In"
              />
            </div>
          </form>
        </div>
        <center>
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => {
              this.props.dispatch({ type: "SET_TO_REGISTER_MODE" });
            }}
          >
            Register
          </button>
        </center>
        <br />
        <div class="is-centered">
          <i class="nes-octocat animate"></i>
        </div>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
