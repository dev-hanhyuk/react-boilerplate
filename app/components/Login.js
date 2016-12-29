import React from 'react'
import { connect } from 'react-redux'
import { fetchUserFromServer } from '_actions/user'

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = { email: '', password: '' };
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail (evt) {
      this.setState({ email: evt.target.value })
    }

    handleChangePassword (evt) {
      this.setState({ password: evt.target.value })
    }

    handleSubmit (evt) {
      evt.preventDefault();
      this.props.fetchUserFromServer(this.state.email, this.state.password);
    }

    render () {
      const { user } = this.props;
      return (
        <section>

          <form onSubmit={this.handleSubmit}>
            email: <input type="email" onChange={this.handleChangeEmail}/>
            password: <input type="password" onChange={this.handleChangePassword}/>
            <button type="submit">Login</button>
          </form>

          {
            user.email ? <p>Welcome, {user.email}!</p> : ''
          }

        </section>
      )
    }
}

const mapStateToProps = ({ user }) => ({ user });
export default connect (mapStateToProps, { fetchUserFromServer })(Login);