import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/user';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom'

const useStyles = ({
  formStyles: {
    textAlign: 'center',
    margin: '0 auto',
    backgroundColor: 'white',
    minHeight: '20rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    borderRadius: '10px'
  },
  formContainerStyles: {
    backgroundColor: '#57c3f9',
    height: '100vh',
    paddingTop: '10rem'
  }, 
  textInputs: {
    width: '50%',
    height: '2rem',
    marginBottom: '3rem',
    border: 'none',
    backgroundColor: '#F6F6F6',
    outline: 'none'
  },
  buttonStyles: {
    width: '35%',
    minHeight: '2rem',
    border: 'none'
  },
  linkTest: {
    color: '#FF8C22'
  }
})

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state);
    this.setState({ username: '', password: '' });
  };

  render() {
    const { username, password } = this.state;
    const { classes } = this.props    
    return (
      <Grid container direction='column'>
        <Grid className={classes.formContainerStyles} container item>
          <Grid item xs={1} sm={3}/>
          <Grid item xs={10} sm={6}>
            <form className={classes.formStyles} onSubmit={this.handleSubmit}>
            <h1>Login</h1>
              <input className={classes.textInputs} name='username' value={username} onChange={this.handleChange} placeholder='username' />
              <input className={classes.textInputs} name='password' type='password' value={password} onChange={this.handleChange} placeholder='password' />
              <br/>
              <button className={classes.buttonStyles} type='submit'>Login</button>
            </form>
          </Grid>
          <Grid item xs={1} sm={3}/>
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { loginUser: (user) => dispatch(loginUser(user)) };
};

export default connect(null, mapDispatchToProps)(withStyles(useStyles)(Login));